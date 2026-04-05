"use client";

import { useEffect, useMemo, useState } from "react";
import type { Direction } from "@/types";
import { directions as fallbackDirections } from "@/content/site";
import styles from "./DirectionsMapSection.module.css";

const iconBySlug: Record<string, string> = {
  pedagogy: "/svg/directions/pedagogy-color.svg",
  construction: "/svg/directions/construction-color.svg",
  service: "/svg/directions/service-color.svg",
  railway: "/svg/directions/railway-color.svg",
  agriculture: "/svg/directions/agriculture-color.svg",
  medical: "/svg/directions/medical-color.svg",
  production: "/svg/directions/production-color.svg",
  youth: "/svg/directions/youth-color.svg",
  puting: "/svg/directions/puting-color.svg",
};

const nodePositions = [
  { left: "16%", top: "24%" },
  { left: "50%", top: "8%" },
  { left: "82%", top: "26%" },
  { left: "88%", top: "58%" },
  { left: "64%", top: "86%" },
  { left: "34%", top: "82%" },
  { left: "10%", top: "56%" },
  { left: "26%", top: "10%" },
];

export function DirectionsMapSection() {
  const [liveDirections, setLiveDirections] = useState<Direction[]>(fallbackDirections);
  const [activeIndex, setActiveIndex] = useState(0);

  const slugMap = useMemo(() => {
    const byAbbr = new Map(fallbackDirections.map((item) => [item.shortTitle.toLowerCase(), item.slug]));
    const byTitle = new Map(fallbackDirections.map((item) => [item.title.toLowerCase(), item.slug]));
    return { byAbbr, byTitle };
  }, []);

  useEffect(() => {
    let active = true;

    const loadDirections = async () => {
      try {
        const response = await fetch("/api/directions", { cache: "no-store" });
        const data = await response.json();
        if (!active) return;

        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item: any) => {
            const title = String(item.name || item.title || "").trim();
            const abbr = String(item.abbreviation || item.shortTitle || "").trim();
            const slug =
              item.slug ??
              slugMap.byAbbr.get(abbr.toLowerCase()) ??
              slugMap.byTitle.get(title.toLowerCase()) ??
              fallbackDirections.find((d) => d.shortTitle === abbr || d.title === title)?.slug ??
              "";

            return {
              title,
              shortTitle: abbr,
              slug,
              description: item.description,
            };
          });
          setLiveDirections(mapped);
        } else {
          setLiveDirections(fallbackDirections);
        }
      } catch {
        if (active) setLiveDirections(fallbackDirections);
      }
    };

    loadDirections();
    const interval = setInterval(loadDirections, 10000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [slugMap]);

  const safeDirections = liveDirections.slice(0, 8);
  const activeDirection = safeDirections[activeIndex] ?? safeDirections[0];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Направления РСО</div>
            <h2 className={styles.title}>Интерактивная карта направлений</h2>
          </div>
          <p className={styles.subtitle}>
            Наведите на направление, чтобы узнать подробнее о сфере деятельности и ключевых задачах.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.map}>
            <div className={styles.rings} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.center}>
              <img src="/svg/directions/лого%20рсо.svg" alt="РСО" />
              <span>РСО</span>
            </div>

            {safeDirections.map((direction, index) => {
              const position = nodePositions[index] ?? nodePositions[0];
              const icon = iconBySlug[direction.slug] ?? iconBySlug.pedagogy;
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${direction.slug}-${index}`}
                  type="button"
                  className={`${styles.node} ${isActive ? styles.active : ""}`}
                  style={position as React.CSSProperties}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <img src={icon} alt="" />
                  <span>{direction.shortTitle}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.panel}>
            <div className={styles.panelBadge}>{activeDirection?.shortTitle}</div>
            <h3>{activeDirection?.title}</h3>
            <p>{activeDirection?.description}</p>
            <div className={styles.panelActions}>
              <a href="/join" className={styles.primary}>
                Подать заявку
              </a>
              <a href="/directions" className={styles.secondary}>
                Все направления
              </a>
            </div>
            <div className={styles.mobileList}>
              {safeDirections.map((direction, index) => (
                <button
                  key={`${direction.slug}-chip-${index}`}
                  type="button"
                  className={`${styles.chip} ${index === activeIndex ? styles.chipActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {direction.shortTitle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
