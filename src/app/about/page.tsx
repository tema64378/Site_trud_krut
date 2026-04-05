import { aboutHighlights } from "@/content/site";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">Российские студенческие отряды</h1>
          <p className="hero-text">
            МООО «РСО» — крупнейшее молодёжное общественное объединение России,
            объединяющее студентов по всей стране для профессиональной работы и
            личностного роста.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            {aboutHighlights.map((item, i) => (
              <article key={i} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="list-grid" style={{ marginTop: "48px" }}>
            <Link href="/about/organization" className="list-item">
              <strong>РСО</strong> — миссия, ценности и принципы организации
            </Link>
            <Link href="/about/history" className="list-item">
              <strong>История</strong> — как создавалось движение студотрядов
            </Link>
            <Link href="/about/results" className="list-item">
              <strong>Итоги года</strong> — достижения и цифры
            </Link>
            <Link href="/about/faq" className="list-item">
              <strong>Вопросы и ответы</strong> — часто задаваемые вопросы
            </Link>
            <Link href="/about/documents" className="list-item">
              <strong>Документы</strong> — устав, стратегия и официальные материалы
            </Link>
            <Link href="/about/brandbook" className="list-item">
              <strong>Фирменный стиль</strong> — логотипы и бренд-гайд
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
