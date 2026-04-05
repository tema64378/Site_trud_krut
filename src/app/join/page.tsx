import { joinInfo } from "@/content/site";

export default function JoinPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Будь с нами!</div>
          <h1 className="hero-title">{joinInfo.title}</h1>
          <p className="hero-text">{joinInfo.note}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>Горячая линия РСО</h3>
              <p>{joinInfo.phone}</p>
            </article>
            <article className="card">
              <h3>График работы</h3>
              <p>{joinInfo.hours}</p>
            </article>
            <article className="card">
              <h3>Анкета участника</h3>
              <p>Заполните данные и мы свяжемся с вами.</p>
            </article>
          </div>
          <div className="list-grid">
            <div className="list-item">
              <strong>Шаг 1:</strong> заполните анкету и расскажите о себе.
            </div>
            <div className="list-item">
              <strong>Шаг 2:</strong> получите подбор отряда и программу подготовки.
            </div>
            <div className="list-item">
              <strong>Шаг 3:</strong> присоединяйтесь к команде и выходите на проект.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
