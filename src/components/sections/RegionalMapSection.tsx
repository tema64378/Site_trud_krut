import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { regions } from "@/content/regions";
import styles from "./RegionalMapSection.module.css";

export function RegionalMapSection() {
  const regionsWithPins = useMemo(() => regions.filter((region) => region.pin), []);
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState(regionsWithPins[0]?.slug ?? regions[0]?.slug);

  const pinOffsets = useMemo(
    () => [
      { x: "-10px", y: "-6px" },
      { x: "10px", y: "-6px" },
      { x: "-8px", y: "8px" },
      { x: "8px", y: "8px" },
      { x: "-14px", y: "0px" },
      { x: "14px", y: "0px" },
      { x: "0px", y: "-12px" },
      { x: "0px", y: "12px" },
    ],
    []
  );

  const filteredRegions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return regions;
    return regions.filter((region) => region.name.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (filteredRegions.length === 0) return;
    if (!filteredRegions.find((r) => r.slug === activeSlug)) {
      setActiveSlug(filteredRegions[0].slug);
    }
  }, [filteredRegions, activeSlug]);

  const activeRegion = regions.find((region) => region.slug === activeSlug);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>Регионы России</div>
            <h2 className={styles.title}>Интерактивная карта штабов</h2>
          </div>
          <p className={styles.subtitle}>
            Выберите регион на карте и перейдите к составу регионального штаба.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.mapWrap}>
            <img src="/svg/карта.svg" alt="Карта России" />
            {regionsWithPins.map((region, index) => {
              const shift = pinOffsets[index % pinOffsets.length];
              return (
              <Link
                key={region.slug}
                href={`/map/${region.slug}`}
                className={`${styles.pin} ${activeSlug === region.slug ? styles.pinActive : ""}`}
                style={{
                  left: region.pin?.left,
                  top: region.pin?.top,
                  ["--pin-shift-x" as any]: shift.x,
                  ["--pin-shift-y" as any]: shift.y,
                }}
                aria-label={region.name}
                title={region.name}
                onMouseEnter={() => setActiveSlug(region.slug)}
                onFocus={() => setActiveSlug(region.slug)}
              >
                <span />
              </Link>
              );
            })}
            {activeRegion?.pin && (
              <div
                className={styles.mapLabel}
                style={{ left: activeRegion.pin.left, top: activeRegion.pin.top }}
              >
                {activeRegion.name}
              </div>
            )}
          </div>

          <div className={styles.list}>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Поиск региона"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span>{filteredRegions.length}</span>
            </div>
            <div className={styles.listBody}>
              {filteredRegions.length === 0 ? (
                <div className={styles.empty}>Регион не найден</div>
              ) : (
                filteredRegions.map((region) => (
                  <Link
                    key={region.slug}
                    href={`/map/${region.slug}`}
                    className={`${styles.regionCard} ${activeSlug === region.slug ? styles.regionActive : ""}`}
                    onMouseEnter={() => setActiveSlug(region.slug)}
                    onFocus={() => setActiveSlug(region.slug)}
                  >
                    <div>
                      <h3>{region.name}</h3>
                      <p>Состав регионального штаба</p>
                    </div>
                    <span className={styles.arrow}>→</span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
