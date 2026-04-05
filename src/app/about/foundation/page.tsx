export default function FoundationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">Фонд РСО</h1>
          <p className="hero-text">
            Фонд поддержки и развития движения студенческих отрядов — инструмент
            финансовой и социальной поддержки участников РСО.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>Цели фонда</h3>
              <p>
                Поддержка программ профессиональной подготовки, социальная защита
                участников движения, финансирование ключевых мероприятий РСО.
              </p>
            </article>
            <article className="card">
              <h3>Направления работы</h3>
              <p>
                Стипендиальные программы, гранты на развитие региональных
                штабов, финансирование проектов и образовательных инициатив.
              </p>
            </article>
            <article className="card">
              <h3>Партнёры</h3>
              <p>
                Фонд работает совместно с крупными работодателями, федеральными
                органами власти и образовательными организациями.
              </p>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Поддержка участников</h2>
            <p className="section-subtitle">
              Фонд оказывает адресную помощь бойцам и штабам РСО в развитии
              инициатив и реализации социально значимых проектов.
            </p>
          </div>

          <div className="card-grid columns-3" style={{ marginTop: "36px" }}>
            <article className="card">
              <h3>Стипендии</h3>
              <p>
                Целевые выплаты активным участникам движения, добившимся
                высоких результатов в трудовой и общественной деятельности.
              </p>
            </article>
            <article className="card">
              <h3>Гранты</h3>
              <p>
                Финансирование перспективных проектов региональных штабов,
                направленных на развитие движения и привлечение молодёжи.
              </p>
            </article>
            <article className="card">
              <h3>Мероприятия</h3>
              <p>
                Поддержка слётов, форумов, конкурсов и образовательных программ
                для участников студенческих отрядов.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
