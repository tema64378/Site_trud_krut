import { trainingPrograms } from "@/content/site";

export default function TrainingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Профобучение</div>
          <h1 className="hero-title">Профессиональная подготовка</h1>
          <p className="hero-text">
            АНО ДПО «РСО-Развитие» реализует образовательные программы для
            участников студенческих отрядов по всем направлениям деятельности.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            {trainingPrograms.map((prog, i) => (
              <article key={i} className="card">
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    fontSize: "20px",
                    color: "var(--accent)",
                    fontWeight: "700",
                  }}
                >
                  {i + 1}
                </div>
                <h3>{prog.title}</h3>
                <p>{prog.text}</p>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Как записаться</h2>
            <p className="section-subtitle">
              Обучение проходит очно и онлайн. Для участия необходимо быть
              членом МООО «РСО» или вступить в организацию.
            </p>
          </div>

          <div className="list-grid" style={{ marginTop: "32px" }}>
            <div className="list-item">
              <strong>Шаг 1:</strong> свяжитесь с региональным штабом или
              оставьте заявку через горячую линию 8 800 770 0 117.
            </div>
            <div className="list-item">
              <strong>Шаг 2:</strong> выберите программу подготовки,
              соответствующую вашему направлению.
            </div>
            <div className="list-item">
              <strong>Шаг 3:</strong> пройдите обучение и получите
              профессиональный сертификат.
            </div>
            <div className="list-item">
              <strong>Шаг 4:</strong> выходите на трудовой объект с
              подтверждёнными компетенциями.
            </div>
          </div>

          <div className="card-grid columns-3" style={{ marginTop: "48px" }}>
            <article className="card">
              <h3>Продолжительность</h3>
              <p>
                От 16 до 72 академических часов в зависимости от программы и
                направления подготовки.
              </p>
            </article>
            <article className="card">
              <h3>Форматы</h3>
              <p>
                Очное обучение в региональных штабах, онлайн-курсы, выездные
                школы и корпоративный университет РСО.
              </p>
            </article>
            <article className="card">
              <h3>Документы</h3>
              <p>
                По окончании выдаётся свидетельство о профессиональной
                подготовке государственного образца.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
