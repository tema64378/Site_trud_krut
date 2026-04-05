import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { centralMembers, centralGroupOrder } from '@/content/central-structure';
import { slugToGroup, groupSlugs } from '@/content/structure-groups';
import StructureSearch from '@/components/structure/StructureSearch';
import StructureHighlight from '@/components/structure/StructureHighlight';

export async function generateStaticParams() {
  return Object.keys(slugToGroup).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = slugToGroup[slug];
  if (!group) return {};
  return { title: `${group} — Структура РСО` };
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = slugToGroup[slug];
  if (!group) notFound();

  const members = centralMembers.filter((m) => m.group === group);
  if (members.length === 0) notFound();

  // Только те группы, у которых есть сотрудники
  const grouped = centralMembers.reduce<Record<string, number>>((acc, m) => {
    acc[m.group] = (acc[m.group] || 0) + 1;
    return acc;
  }, {});
  const availableGroups = centralGroupOrder.filter((g) => grouped[g] > 0);

  return (
    <main className="page">
      <div className="container">
        <section className="page-hero" style={{ paddingBottom: 0 }}>
          {/* Хлебные крошки */}
          <nav className="breadcrumbs" aria-label="Навигация">
            <Link href="/about" className="breadcrumb-link">О нас</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/about/structure/leadership" className="breadcrumb-link">Структура</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{group}</span>
          </nav>

          <h1 className="page-title">Центральный штаб</h1>

          {/* Поиск */}
          <StructureSearch />
        </section>

        {/* Табы */}
        <nav className="struct-tabs" aria-label="Отделы">
          {availableGroups.map((g) => {
            const slug = groupSlugs[g];
            const isActive = g === group;
            const count = grouped[g];
            return (
              <Link
                key={slug}
                href={`/about/structure/${slug}`}
                className={`struct-tab${isActive ? ' struct-tab--active' : ''}`}
              >
                {g} <span className="struct-tab-count">{count}</span>
              </Link>
            );
          })}
        </nav>

        {/* Карточки сотрудников */}
        <section className="page-content">
          <div className="struct-list">
            {members.map((member) => {
              const parts = member.name.split(' ');
              const initials = parts.map((p) => p[0]).join('').slice(0, 2).toUpperCase();
              const phone = member.phone?.replace(/@[\w\d_]+/g, '').replace(/,\s*$/, '').trim();

              return (
                <article
                  key={member.name}
                  id={encodeURIComponent(member.name)}
                  className={`struct-card${member.directionLogo ? ' struct-card--with-logo' : ''}`}
                >
                  {/* Логотип направления */}
                  {member.directionLogo && member.directionLogoStyle === 'pattern' && (
                    <>
                      <Image unoptimized src={member.directionLogo} alt="" width={95} height={95} aria-hidden className="struct-logo-scatter struct-logo-scatter--a" />
                      <Image unoptimized src={member.directionLogo} alt="" width={52} height={52} aria-hidden className="struct-logo-scatter struct-logo-scatter--b" />
                      <Image unoptimized src={member.directionLogo} alt="" width={115} height={115} aria-hidden className="struct-logo-scatter struct-logo-scatter--c" />
                      <Image unoptimized src={member.directionLogo} alt="" width={38} height={38} aria-hidden className="struct-logo-scatter struct-logo-scatter--d" />
                    </>
                  )}
                  {member.directionLogo && member.directionLogoStyle !== 'pattern' && (
                    <Image
                      unoptimized
                      src={member.directionLogo}
                      alt=""
                      width={110}
                      height={110}
                      aria-hidden
                      className={`struct-direction-logo${member.directionLogoStyle === 'corner' ? ' struct-direction-logo--corner' : ''}`}
                    />
                  )}
                  {/* Текст — слева */}
                  <div className="struct-info">
                    <h3 className="struct-name">{member.name}</h3>
                    <p className="struct-role">{member.role}</p>
                  </div>

                  {/* Фото — справа */}
                  <div className="struct-photo">
                    {member.photo ? (
                      <Image
                        unoptimized
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="130px"
                        style={{
                          objectFit: 'cover',
                          objectPosition: member.photoPosition || 'center top',
                          transform: member.photoScale ? `scale(${member.photoScale})` : undefined,
                          transformOrigin: member.photoOrigin ?? (member.photoPosition?.startsWith('right') ? '80% 12%' : '50% 12%'),
                        }}
                      />
                    ) : (
                      <span className="struct-initials">{initials}</span>
                    )}
                    {/* Hover — контакты */}
                    <div className="struct-hover">
                      {phone && (
                        <a href={`tel:${phone.replace(/\D/g, '')}`} className="struct-contact">
                          <span>📞</span> {phone}
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="struct-contact">
                          <span>✉️</span> {member.email}
                        </a>
                      )}
                      {!phone && !member.email && (
                        <span className="struct-contact struct-contact--empty">Контакты не указаны</span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* Клиентский компонент для подсветки по хэшу */}
      <StructureHighlight />
    </main>
  );
}
