export default function ResultsPage() {
  const stats = [
    { value: "250 000+", label: "участников движения" },
    { value: "73", label: "региона России" },
    { value: "8", label: "направлений деятельности" },
    { value: "65+", label: "лет истории" },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">Итоги года</h1>
          <p className="hero-text">
            Ключевые результаты деятельности Российских студенческих отрядов —
            в цифрах и фактах.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-4">
            {stats.map((s, i) => (
              <article key={i} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "var(--accent)",
                    marginBottom: "8px",
                  }}
                >
                  {s.value}
                </div>
                <p>{s.label}</p>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Достижения 2025 года</h2>
            <p className="section-subtitle">
              РСО продолжает развиваться: расширяется география, растёт число
              проектов и укрепляется партнёрство с ведущими работодателями.
            </p>
          </div>

          <div className="list-grid" style={{ marginTop: "32px" }}>
            <div className="list-item">
              Запуск новых образовательных программ по профессиональной
              подготовке бойцов.
            </div>
            <div className="list-item">
              Расширение партнёрства с холдингом РЖД и агропромышленными
              предприятиями.
            </div>
            <div className="list-item">
              Открытие новых региональных штабов и увеличение охвата молодёжи.
            </div>
            <div className="list-item">
              Проведение всероссийского слёта студенческих отрядов с участием
              делегаций из всех регионов.
            </div>
            <div className="list-item">
              Развитие цифровых сервисов: личный кабинет бойца, онлайн-запись
              на обучение.
            </div>
            <div className="list-item">
              Реализация проектов в рамках Стратегии развития РСО до 2030 года.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
