export default function AdminPage() {
  const sections = [
    { title: "Новости", desc: "Публикация и редактирование новостей", count: "9 публикаций" },
    { title: "Направления", desc: "Управление направлениями и отрядами", count: "9 направлений" },
    { title: "Регионы", desc: "Региональные штабы и контакты", count: "73 региона" },
    { title: "Документы", desc: "Загрузка и управление документами", count: "2 документа" },
    { title: "Структура", desc: "Состав Центрального штаба", count: "40+ сотрудников" },
    { title: "Брендбук", desc: "Фирменный стиль и медиаматериалы", count: "11 макетов" },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Панель управления</div>
          <h1 className="hero-title">Административная панель</h1>
          <p className="hero-text">
            Управление контентом сайта МООО «РСО». Полная функциональность
            будет доступна в следующих версиях.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div
            style={{
              background: "rgba(255, 200, 0, 0.12)",
              border: "1px solid rgba(255, 200, 0, 0.4)",
              borderRadius: "var(--radius-sm)",
              padding: "16px 20px",
              marginBottom: "32px",
              fontSize: "14px",
              color: "var(--text)",
            }}
          >
            <strong>Режим разработки.</strong> Административная панель находится
            в разработке. Управление контентом будет доступно после реализации
            бэкенд-части.
          </div>

          <div className="card-grid columns-3">
            {sections.map((s, i) => (
              <article key={i} className="card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>{s.title}</h3>
                  <span
                    style={{
                      fontSize: "12px",
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      borderRadius: "999px",
                      padding: "3px 10px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.count}
                  </span>
                </div>
                <p>{s.desc}</p>
                <button
                  disabled
                  style={{
                    marginTop: "14px",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    border: "1px solid var(--border-color)",
                    background: "transparent",
                    color: "var(--muted)",
                    fontSize: "13px",
                    cursor: "not-allowed",
                  }}
                >
                  Недоступно
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
