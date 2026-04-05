import { regions } from "@/content/regions";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = regions.find((r) => r.slug === slug);
  if (!region) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Региональный штаб</div>
          <h1 className="hero-title">{region.name}</h1>
          <p className="hero-text">
            Региональный штаб МООО «РСО» в {region.name}. Узнайте о местных
            отрядах, направлениях и контактах.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>О штабе</h3>
              <p>
                Региональное отделение РСО в {region.name} объединяет студентов
                вузов региона для участия в трудовых проектах и общественной
                деятельности.
              </p>
            </article>
            <article className="card">
              <h3>Направления</h3>
              <p>
                В регионе действуют отряды по нескольким направлениям. Для
                уточнения актуального состава свяжитесь со штабом.
              </p>
            </article>
            <article className="card">
              <h3>Контакты штаба</h3>
              <p>
                Для связи с региональным штабом звоните на горячую линию:
              </p>
              <p style={{ fontSize: "18px", fontWeight: "700", color: "var(--accent)", marginTop: "8px" }}>
                8 800 770 0 117
              </p>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Вступить в отряд</h2>
            <p className="section-subtitle">
              Хотите стать частью студенческого отряда в {region.name}?
            </p>
          </div>

          <div className="list-grid" style={{ marginTop: "28px" }}>
            <div className="list-item">
              Позвоните на горячую линию <strong>8 800 770 0 117</strong> и
              укажите ваш регион — {region.name}.
            </div>
            <div className="list-item">
              Заполните анкету участника на сайте и оставьте контактные данные.
            </div>
            <div className="list-item">
              Специалист штаба свяжется с вами и расскажет о доступных отрядах
              и проектах.
            </div>
          </div>

          <div style={{ marginTop: "48px" }}>
            <Link href="/map" className="button ghost">
              ← Все регионы
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}
