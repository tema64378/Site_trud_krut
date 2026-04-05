import { existsSync } from "node:fs";
import path from "node:path";

const fontStyles = `
  @font-face { font-family: "ActayWideBold"; src: url("/brandbook/fonts/actay/Actay Wide Bd Regular.otf"); }
  @font-face { font-family: "ActayLightBold"; src: url("/brandbook/fonts/actay/Actay Light Bold.otf"); }
  @font-face { font-family: "ActayCondensedThin"; src: url("/brandbook/fonts/actay/Actay Condensed Thin Regular.otf"); }
  @font-face { font-family: "StolzlThin"; src: url("/brandbook/fonts/stolzl/Stolzl Thin Regular.otf"); }
  @font-face { font-family: "StolzlLight"; src: url("/brandbook/fonts/stolzl/Stolzl Light Regular.otf"); }
  @font-face { font-family: "StolzlBook"; src: url("/brandbook/fonts/stolzl/Stolzl Book Regular.otf"); }
  @font-face { font-family: "StolzlRegular"; src: url("/brandbook/fonts/stolzl/Stolzl Regular.otf"); }
  @font-face { font-family: "StolzlMedium"; src: url("/brandbook/fonts/stolzl/Stolzl Medium Regular.otf"); }
  @font-face { font-family: "StolzlBold"; src: url("/brandbook/fonts/stolzl/Stolzl Bold Regular.otf"); }
  @font-face { font-family: "OnestThin"; src: url("/brandbook/fonts/onest/Onest-Thin.ttf"); }
  @font-face { font-family: "OnestExtraLight"; src: url("/brandbook/fonts/onest/Onest-ExtraLight.ttf"); }
  @font-face { font-family: "OnestLight"; src: url("/brandbook/fonts/onest/Onest-Light.ttf"); }
  @font-face { font-family: "OnestRegular"; src: url("/brandbook/fonts/onest/Onest-Regular.ttf"); }
  @font-face { font-family: "OnestMedium"; src: url("/brandbook/fonts/onest/Onest-Medium.ttf"); }
  @font-face { font-family: "OnestSemiBold"; src: url("/brandbook/fonts/onest/Onest-SemiBold.ttf"); }
  @font-face { font-family: "OnestBold"; src: url("/brandbook/fonts/onest/Onest-Bold.ttf"); }
  @font-face { font-family: "OnestExtraBold"; src: url("/brandbook/fonts/onest/Onest-ExtraBold.ttf"); }
  @font-face { font-family: "OnestBlack"; src: url("/brandbook/fonts/onest/Onest-Black.ttf"); }
`;

const mockups = [
  { title: "Баннер", file: "/brandbook/баннер.png" },
  { title: "Визитка", file: "/brandbook/визитка.png" },
  { title: "Грамота", file: "/brandbook/грамота.png" },
  { title: "Благодарность", file: "/brandbook/благодарность.png" },
  { title: "Заставка", file: "/brandbook/заставка.png" },
  { title: "Заставка (вариант 2)", file: "/brandbook/заставка 2 вариант.png" },
  { title: "Папка", file: "/brandbook/папка.png" },
  { title: "Путёвка в трудовой сезон", file: "/brandbook/путевка в трудовой сезон.png" },
  { title: "Ролл-ап", file: "/brandbook/ролл-ап.png" },
  { title: "Ролл-ап (вариант 2)", file: "/brandbook/ролл-ап 2 вариант.png" },
  { title: "Флаг", file: "/brandbook/флаг.png" },
];

const logos = [
  { title: "Логотип РСО (цветной)", file: "/brandbook/logos/logo-color.svg", bg: "#f2f2f2" },
  { title: "Логотип РСО (белый)", file: "/brandbook/logos/logo-white.svg", bg: "#1a1a1a" },
  { title: "Логотип РСО (чёрный)", file: "/brandbook/logos/logo-black.svg", bg: "#f2f2f2" },
];

const logosHorizontal = [
  { title: "Горизонтальный (цветной)", file: "/brandbook/logos/logo-horizontal-color.svg", bg: "#f2f2f2" },
  { title: "Горизонтальный (белый)", file: "/brandbook/logos/logo-horizontal-white.svg", bg: "#1a1a1a" },
  { title: "Горизонтальный (чёрный)", file: "/brandbook/logos/logo-horizontal-black.svg", bg: "#f2f2f2" },
];

export default function BrandbookPage() {
  const availableMockups = mockups.filter((item) =>
    existsSync(path.join(process.cwd(), "public", item.file.replace(/^\//, ""))),
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">О нас</div>
          <h1 className="hero-title">Фирменный стиль</h1>
          <p className="hero-text">
            Логотипы, цвета, шрифты и примеры фирменных носителей МООО «РСО».
            Брендбук обеспечивает единый визуальный язык организации.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2 className="section-title">Логотипы вертикальные</h2>
          <div className="card-grid columns-3" style={{ marginTop: "24px" }}>
            {logos.map((logo, i) => (
              <article key={i} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: logo.bg,
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "12px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.file}
                    alt={logo.title}
                    style={{ height: "60px", width: "auto", maxWidth: "100%" }}
                  />
                </div>
                <h3 style={{ margin: "0 0 8px" }}>{logo.title}</h3>
                <a
                  href={logo.file}
                  download
                  className="button ghost"
                  style={{ fontSize: "14px", padding: "8px 16px" }}
                >
                  Скачать
                </a>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Логотипы горизонтальные</h2>
          </div>
          <div className="card-grid columns-3" style={{ marginTop: "24px" }}>
            {logosHorizontal.map((logo, i) => (
              <article key={i} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    background: logo.bg,
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "12px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.file}
                    alt={logo.title}
                    style={{ height: "60px", width: "auto", maxWidth: "100%" }}
                  />
                </div>
                <h3 style={{ margin: "0 0 8px" }}>{logo.title}</h3>
                <a
                  href={logo.file}
                  download
                  className="button ghost"
                  style={{ fontSize: "14px", padding: "8px 16px" }}
                >
                  Скачать
                </a>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Цветовая палитра</h2>
          </div>
          <div className="card-grid columns-4" style={{ marginTop: "24px" }}>
            {[
              { name: "Синий РСО", hex: "#0804FF", light: false },
              { name: "Белый", hex: "#FFFFFF", light: true },
              { name: "Светло-серый", hex: "#EEEEEE", light: true },
              { name: "Чёрный", hex: "#000000", light: false },
            ].map((color, i) => (
              <article
                key={i}
                className="card"
                style={{ textAlign: "center", padding: "16px" }}
              >
                <div
                  style={{
                    background: color.hex,
                    height: "64px",
                    borderRadius: "10px",
                    marginBottom: "12px",
                    border: color.light ? "1px solid #e5e7eb" : "none",
                  }}
                />
                <strong style={{ display: "block", fontSize: "14px" }}>
                  {color.name}
                </strong>
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    fontFamily: "monospace",
                  }}
                >
                  {color.hex}
                </span>
              </article>
            ))}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Шрифты</h2>
          </div>
          <div className="card-grid columns-3" style={{ marginTop: "24px" }}>
            <article className="card" style={{ padding: "28px 24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>Акцентный</span>
              </div>
              <div style={{ fontFamily: "sans-serif", fontSize: "36px", fontWeight: 700, lineHeight: 1.1, marginBottom: "8px" }}>
                Actay
              </div>
              <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>
                Заголовки, акценты, витрины. Используется для ключевых смысловых элементов.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                {[
                  { label: "Wide Bold", font: "ActayWideBold" },
                  { label: "Light Bold", font: "ActayLightBold" },
                  { label: "Condensed Thin", font: "ActayCondensedThin" },
                ].map(w => (
                  <span key={w.label} style={{ fontSize: "16px", fontFamily: w.font }}>{w.label}</span>
                ))}
              </div>
              <a href="/brandbook/fonts/actay/Actay Wide Bd Regular.otf" download className="button ghost" style={{ fontSize: "14px", padding: "8px 16px" }}>Скачать</a>
            </article>

            <article className="card" style={{ padding: "28px 24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>Основной</span>
              </div>
              <div style={{ fontFamily: "sans-serif", fontSize: "36px", fontWeight: 500, lineHeight: 1.1, marginBottom: "8px" }}>
                Stolzl
              </div>
              <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>
                Основной шрифт интерфейса и печатных материалов. Используется повсеместно.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                {[
                  { label: "Thin", font: "StolzlThin" },
                  { label: "Light", font: "StolzlLight" },
                  { label: "Book", font: "StolzlBook" },
                  { label: "Regular", font: "StolzlRegular" },
                  { label: "Medium", font: "StolzlMedium" },
                  { label: "Bold", font: "StolzlBold" },
                ].map(w => (
                  <span key={w.label} style={{ fontSize: "16px", fontFamily: w.font }}>{w.label}</span>
                ))}
              </div>
              <a href="/brandbook/fonts/stolzl/Stolzl Regular.otf" download className="button ghost" style={{ fontSize: "14px", padding: "8px 16px" }}>Скачать</a>
            </article>

            <article className="card" style={{ padding: "28px 24px" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>Для больших текстов</span>
              </div>
              <div style={{ fontFamily: "sans-serif", fontSize: "36px", fontWeight: 400, lineHeight: 1.1, marginBottom: "8px" }}>
                Onest
              </div>
              <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "20px" }}>
                Применяется в длинных текстах, статьях и документах для удобства чтения.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                {[
                  { label: "Thin", font: "OnestThin" },
                  { label: "ExtraLight", font: "OnestExtraLight" },
                  { label: "Light", font: "OnestLight" },
                  { label: "Regular", font: "OnestRegular" },
                  { label: "Medium", font: "OnestMedium" },
                  { label: "SemiBold", font: "OnestSemiBold" },
                  { label: "Bold", font: "OnestBold" },
                  { label: "ExtraBold", font: "OnestExtraBold" },
                  { label: "Black", font: "OnestBlack" },
                ].map(w => (
                  <span key={w.label} style={{ fontSize: "16px", fontFamily: w.font }}>{w.label}</span>
                ))}
              </div>
              <a href="/brandbook/fonts/onest/Onest-Regular.ttf" download className="button ghost" style={{ fontSize: "14px", padding: "8px 16px" }}>Скачать</a>
            </article>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Паттерны</h2>
          </div>

          {/* Введение */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
            <article className="card" style={{ padding: "20px 24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: "16px" }}>Основной паттерн</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px", lineHeight: 1.3 }}>В качестве основного паттерна используется решение из квадратов и прямоугольников</h3>
              <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.6 }}>Внутри фигур размещаются графические элементы — иконки направлений и рисунки из овалов.</p>
            </article>
            <div style={{ borderRadius: "12px", overflow: "hidden", background: "#0804FF", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "180px" }}>
              <span style={{ color: "white", fontSize: "28px", fontWeight: 800, textAlign: "center", lineHeight: 1.2, padding: "20px 24px" }}>паттерн<br/>студенческих<br/>отрядов</span>
            </div>
          </div>

          {/* Шаг 1 */}
          <h3 style={{ marginTop: "36px", marginBottom: "12px", fontSize: "18px", fontWeight: 700 }}>Шаг 1 — Создание сетки</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#111" }}>Для того, чтобы составить паттерн, разбейте поверхность носителя на равные квадраты.</p>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820028.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#111", marginBottom: "16px" }}>Старайтесь размещать <strong>не более пяти блоков</strong> на большую сторону носителя.</p>
                <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: "8px", padding: "12px 14px", fontSize: "14px", color: "#111", lineHeight: 1.5 }}>
                  ❗ Больше — можно. В случаях, когда объекты вытянуты в одну из сторон. Например: лента для бейджа.
                </div>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820031.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px" }}>Создание сетки на непропорциональной площади</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ fontSize: "14px", lineHeight: 1.5 }}><strong>1.</strong> Бывают случаи, когда составить сетку из квадратов не получится из-за соотношения сторон носителя.</div>
                  <div style={{ fontSize: "14px", lineHeight: 1.5 }}><strong>2.</strong> В этой ситуации разрешается вытянуть фигуры к недостающей стороне, сохраняя пропорции.</div>
                  <div style={{ fontSize: "14px", lineHeight: 1.5 }}><strong>3.</strong> Вы всегда можете изменить количество фигур или не полностью заполнять пространство носителя.</div>
                </div>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820034.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>
          </div>

          {/* Шаг 2 */}
          <h3 style={{ marginTop: "36px", marginBottom: "12px", fontSize: "18px", fontWeight: 700 }}>Шаг 2 — Распределение цвета</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.6 }}>Красьте фигуры таким образом, чтобы получалось <strong>как можно меньше одинаковых цветов рядом</strong>.</p>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820035.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.6, marginBottom: "16px" }}>Вы можете сочетать <strong>до 4 цветов</strong>:</p>
                <div style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted)" }}>
                  <div style={{ marginBottom: "8px" }}>• При создании паттерна из <strong style={{ color: "#111" }}>основной палитры</strong></div>
                  <div>• При создании паттерна из <strong style={{ color: "#111" }}>палитры направлений</strong></div>
                </div>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820036.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", fontWeight: 700, marginBottom: "12px" }}>Паттерн направления</p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted)" }}>Создаётся таким же образом, как и основной — только в цветах конкретного направления.</p>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820039.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>
          </div>

          {/* Шаг 3 */}
          <h3 style={{ marginTop: "36px", marginBottom: "12px", fontSize: "18px", fontWeight: 700 }}>Шаг 3 — Определение размера фигур</h3>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
            <div style={{ padding: "20px 24px", background: "white" }}>
              <p style={{ fontSize: "15px", lineHeight: 1.6 }}>В некоторых случаях вы можете <strong>объединить от 2 до 9 квадратов</strong> для достижения нужного результата.</p>
            </div>
            <div style={{ overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brandbook/patterns/1819820037.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
            </div>
          </div>

          {/* Шаг 4 */}
          <h3 style={{ marginTop: "36px", marginBottom: "12px", fontSize: "18px", fontWeight: 700 }}>Шаг 4 — Заполнение элементами</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.6, marginBottom: "12px" }}>После составления правильной сетки начните заполнение фигур элементами.</p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted)" }}>В качестве элементов могут выступать <strong style={{ color: "#111" }}>иконки направлений</strong>, а также <strong style={{ color: "#111" }}>рисунки из овалов</strong>.</p>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820038.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", borderRadius: "12px", overflow: "hidden", border: "1px solid #e5e7eb", maxHeight: "160px" }}>
              <div style={{ padding: "20px 24px", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.6, marginBottom: "20px" }}>Примеры элементов для размещения в паттерне.</p>
                <a href="/brandbook/patterns/1819820041.svg" download className="button ghost" style={{ fontSize: "14px", padding: "10px 18px", alignSelf: "flex-start" }}>Скачать элементы SVG</a>
              </div>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brandbook/patterns/1819820041.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "right center", display: "block" }} />
              </div>
            </div>
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <h2 className="section-title">Макеты и носители</h2>
            <p className="section-subtitle">
              Примеры применения фирменного стиля на различных носителях.
            </p>
          </div>
          {availableMockups.length > 0 ? (
            <div className="card-grid columns-3" style={{ marginTop: "24px" }}>
              {availableMockups.map((item, i) => (
                <article key={i} className="card" style={{ padding: "16px" }}>
                  <div
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginBottom: "12px",
                      background: "#f2f2f2",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.file}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  <h3 style={{ margin: "0", fontSize: "15px" }}>{item.title}</h3>
                </article>
              ))}
            </div>
          ) : (
            <article className="card" style={{ marginTop: "24px", padding: "24px" }}>
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Макеты временно скрыты</h3>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
                На этой сборке отсутствуют исходные превью-макеты брендбука, поэтому мы скрыли пустые карточки.
                Остальные элементы фирменного стиля, логотипы, шрифты и паттерны доступны.
              </p>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
