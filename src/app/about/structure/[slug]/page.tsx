import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { centralMembers, type CentralMember } from '@/content/central-structure';
import {
  slugToGroup,
  hqGroups,
  subsidiarySlugs,
  subsidiaryTabs,
  mainTabs,
} from '@/content/structure-groups';
import StructureSearch from '@/components/structure/StructureSearch';
import StructureHighlight from '@/components/structure/StructureHighlight';
import StructureTabScroll from '@/components/structure/StructureTabScroll';

export async function generateStaticParams() {
  return [
    ...mainTabs.map((t) => ({ slug: t.slug })),
    ...subsidiaryTabs.map((t) => ({ slug: t.slug })),
    { slug: 'leadership' },
    { slug: 'directions' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'hq') return { title: 'Центральный штаб — Структура РСО' };
  if (slug === 'subsidiaries') return {};
  const group = slugToGroup[slug];
  if (!group) return {};
  return { title: `${group} — Структура РСО` };
}

function getMemberCount(slug: string): number {
  if (slug === 'hq') {
    return centralMembers.filter((m) => hqGroups.includes(m.group)).length;
  }
  if (slug === 'subsidiaries') {
    return subsidiaryTabs.reduce((sum, t) => {
      return sum + centralMembers.filter((m) => m.group === t.group).length;
    }, 0);
  }
  const group = slugToGroup[slug];
  if (!group) return 0;
  return centralMembers.filter((m) => m.group === group).length;
}

function MemberCard({ member, isLeader }: { member: CentralMember; isLeader?: boolean }) {
  const parts = member.name.split(' ');
  const initials = parts.map((p) => p[0]).join('').slice(0, 2).toUpperCase();
  const phone = member.phone?.replace(/@[\w\d_]+/g, '').replace(/,\s*$/, '').trim();

  // ── Обычная карточка ──
  return (
    <article
      id={encodeURIComponent(member.name)}
      className={`struct-card${member.directionLogo ? ' struct-card--with-logo' : ''}`}
    >
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

      <div className="struct-info">
        <h3 className="struct-name">{member.name}</h3>
        <p className="struct-role">{member.role}</p>
      </div>

      <div className="struct-photo">
        {member.photo ? (
          <Image
            unoptimized
            src={member.photo}
            alt={member.name}
            fill
            sizes="148px"
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
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'leadership' || slug === 'directions') redirect('/about/structure/hq');
  if (slug === 'subsidiaries') redirect('/about/structure/razvitie');

  let members: typeof centralMembers = [];
  if (slug === 'hq') {
    members = centralMembers.filter((m) => hqGroups.includes(m.group));
  } else {
    const group = slugToGroup[slug];
    if (!group) notFound();
    members = centralMembers.filter((m) => m.group === group);
  }

  const isSubsidiary = subsidiarySlugs.includes(slug);
  const activeMainTabSlug = isSubsidiary ? 'subsidiaries' : slug;

  const currentLabel =
    slug === 'hq'
      ? 'ЦШ'
      : (mainTabs.find((t) => t.slug === slug)?.label ??
         subsidiaryTabs.find((t) => t.slug === slug)?.label ??
         slugToGroup[slug] ?? slug);

  // Для ЦШ — разбиваем на подгруппы
  const leadershipMembers = slug === 'hq'
    ? members.filter((m) => m.group === hqGroups[0])
    : [];
  const directionMembers = slug === 'hq'
    ? members.filter((m) => m.group === hqGroups[1])
    : [];

  return (
    <main className="page">
      <div className="container">
        <section className="page-hero" style={{ paddingBottom: 0 }}>
          <nav className="breadcrumbs" aria-label="Навигация">
            <Link href="/about" className="breadcrumb-link">О нас</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/about/structure/hq" className="breadcrumb-link">Структура</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{currentLabel}</span>
          </nav>
          <h1 className="page-title">Структура РСО</h1>
          <StructureSearch />
        </section>

        {/* Главные вкладки */}
        <div className="struct-tabs-wrap">
          <nav className="struct-tabs" aria-label="Разделы">
            {mainTabs.map((tab) => {
              const isActive = tab.slug === activeMainTabSlug;
              const href = tab.slug === 'subsidiaries'
                ? '/about/structure/razvitie'
                : `/about/structure/${tab.slug}`;
              const count = getMemberCount(tab.slug);
              return (
                <Link
                  key={tab.slug}
                  href={href}
                  className={`struct-tab${isActive ? ' struct-tab--active' : ''}`}
                >
                  {tab.label}
                  {count > 0 && <span className="struct-tab-count">{count}</span>}
                </Link>
              );
            })}
          </nav>
          <StructureTabScroll />
        </div>

        {/* Вложенные вкладки для дочерних */}
        {isSubsidiary && (
          <nav className="struct-subtabs" aria-label="Дочерние организации">
            {subsidiaryTabs.map((tab) => {
              const count = getMemberCount(tab.slug);
              return (
                <Link
                  key={tab.slug}
                  href={`/about/structure/${tab.slug}`}
                  className={`struct-subtab${slug === tab.slug ? ' struct-subtab--active' : ''}`}
                >
                  {tab.label}
                  {count > 0 && <span className="struct-tab-count">{count}</span>}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Карточки */}
        <section className="page-content">
          {members.length === 0 ? (
            <div className="struct-empty">
              <span className="struct-empty-icon">🏗</span>
              <p>Информация появится позже</p>
            </div>
          ) : slug === 'hq' ? (
            <>
              {/* Командир и Комиссар — hero-строка */}
              <div className="struct-leader-row">
                {leadershipMembers.map((m) => <MemberCard key={m.name} member={m} isLeader />)}
              </div>
              {/* Руководители направлений */}
              <div className="struct-group-header">Руководители направлений</div>
              <div className="struct-list">
                {directionMembers.map((m) => <MemberCard key={m.name} member={m} />)}
              </div>
            </>
          ) : (
            <div className="struct-list">
              {members.map((m) => <MemberCard key={m.name} member={m} />)}
            </div>
          )}
        </section>
      </div>

      <StructureHighlight />
    </main>
  );
}
