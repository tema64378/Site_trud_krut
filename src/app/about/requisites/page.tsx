import { contactInfo } from "@/content/site";

const requisites = [
  { label: "Полное наименование", value: "Молодёжная общероссийская общественная организация «Российские студенческие отряды»" },
  { label: "Сокращённое наименование", value: "МООО «РСО»" },
  { label: "Юридический адрес", value: contactInfo.address },
  { label: "ИНН", value: "7703370560" },
  { label: "КПП", value: "770301001" },
  { label: "ОГРН", value: "1047796051536" },
  { label: "ОКПО", value: "73785034" },
  { label: "Банк", value: "ПАО «Сбербанк России»" },
  { label: "БИК", value: "044525225" },
  { label: "Расчётный счёт", value: "40703810138060001960" },
  { label: "Корреспондентский счёт", value: "30101810400000000225" },
];

export default function RequisitesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">Реквизиты</h1>
          <p className="hero-text">
            Официальные реквизиты МООО «РСО» для оформления документов и
            заключения договоров.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div
            className="card"
            style={{ maxWidth: "720px" }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {requisites.map((item, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--border-color)",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 0",
                        color: "var(--muted)",
                        fontSize: "14px",
                        width: "45%",
                        verticalAlign: "top",
                        paddingRight: "16px",
                      }}
                    >
                      {item.label}
                    </td>
                    <td
                      style={{
                        padding: "14px 0",
                        fontWeight: "500",
                        fontSize: "15px",
                        verticalAlign: "top",
                      }}
                    >
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-grid columns-3" style={{ marginTop: "36px" }}>
            <article className="card">
              <h3>Электронная почта</h3>
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </article>
            <article className="card">
              <h3>Горячая линия</h3>
              <p>{contactInfo.hotline}</p>
            </article>
            <article className="card">
              <h3>Телефон приёмной</h3>
              <p>{contactInfo.duty}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
