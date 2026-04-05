export default function DayPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">День студенческих отрядов</h1>
          <p className="hero-text">
            Ежегодный праздник, объединяющий бойцов и ветеранов движения по всей
            стране. Отмечается 17 февраля.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>Дата праздника</h3>
              <p>
                17 февраля — официальный День студенческих отрядов. В этот день
                в 1959 году был создан первый студенческий строительный отряд
                МГУ.
              </p>
            </article>
            <article className="card">
              <h3>Традиции</h3>
              <p>
                В этот день региональные штабы проводят торжественные линейки,
                концерты, встречи ветеранов и посвящения новых бойцов в отряды.
              </p>
            </article>
            <article className="card">
              <h3>По всей России</h3>
              <p>
                Праздничные мероприятия охватывают все 73 региона страны. К
                торжествам присоединяются ветераны движения и партнёры РСО.
              </p>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">История праздника</h2>
            <p className="section-subtitle">
              Традиция ежегодного отмечания Дня студенческих отрядов восходит к
              советскому периоду. Сегодня праздник объединяет сотни тысяч
              участников движения — нынешних и бывших.
            </p>
          </div>

          <div className="list-grid" style={{ marginTop: "32px" }}>
            <div className="list-item">
              <strong>1959</strong> — первый студенческий строительный отряд МГУ
              отправился на целинные земли Казахстана.
            </div>
            <div className="list-item">
              <strong>1990-е</strong> — движение переживает возрождение после
              постсоветского периода.
            </div>
            <div className="list-item">
              <strong>2004</strong> — создание МООО «РСО» как единой
              общероссийской организации.
            </div>
            <div className="list-item">
              <strong>Сегодня</strong> — День РСО ежегодно отмечают более
              250 000 участников и выпускников движения.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
