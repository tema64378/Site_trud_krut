import { directions } from "@/content/site";
import { joinInfo } from "@/content/site";

export default function FindSquadPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Найди свой отряд</div>
          <h1 className="hero-title">Подберём отряд под тебя</h1>
          <p className="hero-text">
            {joinInfo.note}
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <h2 className="section-title">Выбери направление</h2>
            <p className="section-subtitle">
              Какая сфера деятельности тебе ближе?
            </p>
          </div>

          <div className="card-grid columns-4" style={{ marginTop: "32px" }}>
            {directions.map((dir) => (
              <article key={dir.slug} className="card" style={{ textAlign: "center", cursor: "pointer" }}>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/svg/directions/${dir.slug}-white.svg`}
                    alt={dir.title}
                    width={30}
                    height={30}
                  />
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  {dir.shortTitle}
                </div>
                <h3 style={{ fontSize: "14px", margin: "0 0 6px" }}>{dir.title}</h3>
                <p style={{ fontSize: "13px" }}>{dir.description}</p>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Как мы подбираем отряд</h2>
          </div>

          <div className="list-grid" style={{ marginTop: "28px" }}>
            <div className="list-item">
              <strong>Шаг 1:</strong> позвоните на горячую линию {joinInfo.phone} или
              заполните анкету на сайте.
            </div>
            <div className="list-item">
              <strong>Шаг 2:</strong> расскажите о своём городе, вузе и
              предпочтениях по направлению.
            </div>
            <div className="list-item">
              <strong>Шаг 3:</strong> получите список подходящих отрядов и
              контакты командиров.
            </div>
            <div className="list-item">
              <strong>Шаг 4:</strong> познакомьтесь с командой и пройдите
              необходимую подготовку.
            </div>
          </div>

          <div className="card-grid columns-3" style={{ marginTop: "48px" }}>
            <article className="card">
              <h3>Горячая линия</h3>
              <p style={{ fontSize: "20px", fontWeight: "700", color: "var(--accent)" }}>
                {joinInfo.phone}
              </p>
              <p style={{ fontSize: "13px" }}>{joinInfo.hours}</p>
            </article>
            <article className="card">
              <h3>Карта отрядов</h3>
              <p>
                Используйте интерактивную карту для поиска штабов в вашем
                регионе.
              </p>
              <a href="/map" className="button primary" style={{ marginTop: "12px", display: "inline-block" }}>
                Открыть карту
              </a>
            </article>
            <article className="card">
              <h3>Профобучение</h3>
              <p>
                Перед выходом на объект все бойцы проходят подготовку. Обучение
                бесплатное.
              </p>
              <a href="/training" className="button ghost" style={{ marginTop: "12px", display: "inline-block" }}>
                Подробнее
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
