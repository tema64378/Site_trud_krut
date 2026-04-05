import { existsSync } from "node:fs";
import path from "node:path";

const documents = [
  {
    title: "Устав МООО «РСО»",
    description:
      "Официальный устав Молодёжной общероссийской общественной организации «Российские студенческие отряды».",
    file: "/documents/ustav/Ustav molodezhnoi obshcherossiiskoi obshchestvennoi organizatcii RSO.pdf",
    size: "PDF",
  },
  {
    title: "Стратегия развития РСО до 2030 года",
    description:
      "Стратегический документ, определяющий направления развития движения студенческих отрядов на период до 2030 года.",
    file: "/documents/startegy/Strategiya_razvitiya_rso_do_2030_goda.pdf",
    size: "PDF",
  },
];

export default function DocumentsPage() {
  const docs = documents.map((doc) => ({
    ...doc,
    available: existsSync(path.join(process.cwd(), "public", doc.file.replace(/^\//, ""))),
  }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">Документы</h1>
          <p className="hero-text">
            Официальные документы МООО «РСО» — устав, стратегия и нормативные
            материалы организации.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            {docs.map((doc, i) => (
              <article key={i} className="card">
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "4px 10px",
                    fontSize: "12px",
                    fontWeight: "700",
                    marginBottom: "12px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {doc.size}
                </div>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                {doc.available ? (
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button primary"
                    style={{ marginTop: "16px", display: "inline-block" }}
                  >
                    Скачать
                  </a>
                ) : (
                  <div
                    style={{
                      marginTop: "16px",
                      display: "inline-block",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      background: "rgba(8, 4, 255, 0.08)",
                      color: "var(--muted)",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Документ добавим перед публикацией
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
