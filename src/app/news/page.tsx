import { allNews } from "@/content/site";

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Актуально</div>
          <h1 className="hero-title">Новости</h1>
          <p className="hero-text">
            Последние события из жизни Российских студенческих отрядов — проекты,
            партнёрства и достижения движения.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            {allNews.map((item, i) => (
              <article key={i} className="card news-card">
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
