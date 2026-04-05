import { directions } from "@/content/site";
import Link from "next/link";

export default function DirectionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Направления</div>
          <h1 className="hero-title">Выбери своё направление</h1>
          <p className="hero-text">
            Российские студенческие отряды работают в 9 направлениях. Каждый
            найдёт дело по душе — от педагогики до производства.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-4">
            {directions.map((dir) => (
              <Link key={dir.slug} href={`/directions/${dir.slug}`}>
                <article className="card" style={{ cursor: "pointer", height: "100%" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/svg/directions/${dir.slug}-white.svg`}
                      alt={dir.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "6px",
                    }}
                  >
                    {dir.shortTitle}
                  </div>
                  <h3 style={{ fontSize: "16px" }}>{dir.title}</h3>
                  <p style={{ fontSize: "14px" }}>{dir.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
