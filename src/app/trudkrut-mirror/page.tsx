export default function TrudkrutMirrorPage() {
  const trudkrutUrl = "https://trudkrut.xn--d1amqcgedd.xn--p1ai";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Сервисы РСО</div>
          <h1 className="hero-title">ТрудКрут</h1>
          <p className="hero-text">
            ТрудКрут — официальный сервис Российских студенческих отрядов для
            поиска работы, трудоустройства бойцов и управления трудовым сезоном.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>Для бойцов</h3>
              <p>
                Найдите трудовой проект в своём регионе, подайте заявку и
                отслеживайте статус — всё в одном сервисе.
              </p>
            </article>
            <article className="card">
              <h3>Для работодателей</h3>
              <p>
                Разместите вакансию и подберите студентов из базы РСО.
                Официальное трудоустройство через ТрудКрут.
              </p>
            </article>
            <article className="card">
              <h3>Для штабов</h3>
              <p>
                Управляйте составом отрядов, следите за выходами на объекты и
                ведите отчётность в удобном формате.
              </p>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Перейти на сайт</h2>
            <p className="section-subtitle">
              Официальный ресурс ТрудКрут доступен по ссылке ниже. Сайт работает
              в доменной зоне .студотряды.рф.
            </p>
          </div>

          <div
            className="card"
            style={{ marginTop: "32px", maxWidth: "480px", textAlign: "center", padding: "36px" }}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "16px",
              }}
            >
              ТрудКрут
            </div>
            <p style={{ marginBottom: "24px", color: "var(--muted)" }}>
              Перейти на официальный сайт сервиса трудоустройства студенческих
              отрядов.
            </p>
            <a
              href={trudkrutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Открыть ТрудКрут
            </a>
            <div style={{ marginTop: "16px", fontSize: "12px", color: "var(--muted)" }}>
              {trudkrutUrl}
            </div>
          </div>

          <div className="list-grid" style={{ marginTop: "48px" }}>
            <div className="list-item">
              ТрудКрут работает как официальная платформа трудоустройства МООО «РСО».
            </div>
            <div className="list-item">
              На сервисе размещены актуальные вакансии от партнёров РСО по всей России.
            </div>
            <div className="list-item">
              Регистрация доступна для всех участников студенческих отрядов.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
