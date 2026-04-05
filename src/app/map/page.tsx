import { regions } from "@/content/regions";
import Link from "next/link";

export default function MapPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">География</div>
          <h1 className="hero-title">РСО на карте России</h1>
          <p className="hero-text">
            Студенческие отряды работают в {regions.length} регионах страны.
            Выберите свой регион, чтобы узнать о местном штабе.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="regional-map-section" style={{ borderRadius: "var(--radius-md)", padding: "36px", marginBottom: "48px" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "800px", margin: "0 auto" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/svg/карта.svg"
                alt="Карта России"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {regions
                .filter((r) => r.pin)
                .map((region) => (
                  <Link key={region.slug} href={`/map/${region.slug}`}>
                    <div
                      style={{
                        position: "absolute",
                        left: region.pin!.left,
                        top: region.pin!.top,
                        transform: "translate(-50%, -50%)",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        border: "2px solid #fff",
                        cursor: "pointer",
                        boxShadow: "0 2px 6px rgba(8,4,255,0.4)",
                        transition: "transform 0.2s",
                      }}
                      title={region.name}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <h2 className="section-title">Все регионы</h2>
            <p className="section-subtitle">
              Нажмите на название региона, чтобы узнать о штабе РСО.
            </p>
          </div>

          <div className="regional-map-grid" style={{ marginTop: "32px" }}>
            {regions.map((region) => (
              <Link key={region.slug} href={`/map/${region.slug}`}>
                <div className="regional-card">
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      marginBottom: "10px",
                    }}
                  />
                  <span style={{ fontSize: "13px", fontWeight: "500", textAlign: "center" }}>
                    {region.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
