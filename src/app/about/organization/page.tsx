export default function OrganizationPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">РСО — Российские студенческие отряды</h1>
          <p className="hero-text">
            Молодёжная общероссийская общественная организация, объединяющая
            студентов для осмысленной профессиональной деятельности.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card-grid columns-3">
            <article className="card">
              <h3>Миссия</h3>
              <p>
                Создавать условия для профессионального и личностного роста
                молодёжи через трудовую деятельность, воспитание и сплочение в
                студенческих отрядах.
              </p>
            </article>
            <article className="card">
              <h3>Ценности</h3>
              <p>
                Труд, дружба, взаимовыручка, патриотизм и стремление к развитию.
                Мы убеждены: молодёжь способна изменить страну к лучшему.
              </p>
            </article>
            <article className="card">
              <h3>Масштаб</h3>
              <p>
                Более 250 000 участников в 73 регионах России. Каждый год
                тысячи студентов выходят на трудовые проекты по всей стране.
              </p>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Структура организации</h2>
            <p className="section-subtitle">
              МООО «РСО» включает Центральный штаб, региональные отделения и
              местные штабы в вузах. Руководство осуществляется командиром и
              комиссаром Центрального штаба.
            </p>
          </div>

          <div className="card-grid columns-3" style={{ marginTop: "36px" }}>
            <article className="card">
              <h3>Центральный штаб</h3>
              <p>
                Координирует деятельность всех региональных штабов, разрабатывает
                программы и стратегию развития движения.
              </p>
            </article>
            <article className="card">
              <h3>Региональные штабы</h3>
              <p>
                Действуют в 73 субъектах России, организуют трудовые проекты и
                подготовку участников на местах.
              </p>
            </article>
            <article className="card">
              <h3>Местные штабы</h3>
              <p>
                Работают непосредственно в вузах: набирают бойцов, формируют
                отряды и выходят на объекты.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
