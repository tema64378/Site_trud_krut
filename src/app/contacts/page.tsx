import { contactInfo } from "@/content/site";

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Связь с нами</div>
          <h1 className="hero-title">Контакты</h1>
          <p className="hero-text">
            Центральный штаб РСО всегда на связи. Обращайтесь по любым
            вопросам — мы ответим.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>Горячая линия</h3>
              <p style={{ fontSize: "22px", fontWeight: "700", color: "var(--accent)", marginBottom: "4px" }}>
                {contactInfo.hotline}
              </p>
              <p style={{ fontSize: "14px" }}>Бесплатно по России</p>
            </article>
            <article className="card">
              <h3>Телефон приёмной</h3>
              <p style={{ fontSize: "20px", fontWeight: "600", color: "var(--text)", marginBottom: "4px" }}>
                {contactInfo.duty}
              </p>
              <p style={{ fontSize: "14px" }}>Центральный штаб</p>
            </article>
            <article className="card">
              <h3>Электронная почта</h3>
              <p style={{ marginBottom: "4px" }}>
                <a href={`mailto:${contactInfo.email}`} style={{ color: "var(--accent)", fontWeight: "600" }}>
                  {contactInfo.email}
                </a>
              </p>
              <p style={{ fontSize: "14px" }}>Общие вопросы</p>
            </article>
          </div>

          <div className="card-grid columns-3" style={{ marginTop: "22px" }}>
            <article className="card">
              <h3>Пресс-служба</h3>
              <p>
                <a href={`mailto:${contactInfo.press}`} style={{ color: "var(--accent)", fontWeight: "600" }}>
                  {contactInfo.press}
                </a>
              </p>
              <p style={{ fontSize: "14px", marginTop: "4px" }}>
                Для СМИ и медиазапросов
              </p>
            </article>
            <article className="card">
              <h3>Юридический адрес</h3>
              <p>{contactInfo.address}</p>
            </article>
            <article className="card">
              <h3>Социальные сети</h3>
              <div className="list-grid" style={{ marginTop: "0", gap: "8px" }}>
                <a href="https://vk.com/rso" target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--accent)", fontWeight: "600" }}>
                  ВКонтакте
                </a>
                <a href="https://t.me/rso_official" target="_blank" rel="noopener noreferrer"
                  style={{ color: "var(--accent)", fontWeight: "600" }}>
                  Telegram
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
