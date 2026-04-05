/**
 * DirectionsGrid.tsx
 * Сетка с карточками всех 9 направлений
 */

'use client';

import { directions } from '@/content/site';
import { DirectionCard } from './DirectionCard';
import styles from './DirectionsGrid.module.css';
import { useEffect, useMemo, useState } from 'react';
import type { Direction } from '@/types';

export function DirectionsGrid() {
  const [liveDirections, setLiveDirections] = useState<Direction[]>(directions);

  const slugMap = useMemo(() => {
    const byAbbr = new Map(directions.map((item) => [item.shortTitle.toLowerCase(), item.slug]));
    const byTitle = new Map(directions.map((item) => [item.title.toLowerCase(), item.slug]));
    return { byAbbr, byTitle };
  }, []);

  useEffect(() => {
    let active = true;

    const loadDirections = async () => {
      try {
        const response = await fetch('/api/directions', { cache: 'no-store' });
        const data = await response.json();
        if (!active) return;

        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item: any) => {
            const title = String(item.name || item.title || '').trim();
            const abbr = String(item.abbreviation || item.shortTitle || '').trim();
            const slug =
              item.slug ??
              slugMap.byAbbr.get(abbr.toLowerCase()) ??
              slugMap.byTitle.get(title.toLowerCase()) ??
              directions.find((d) => d.shortTitle === abbr || d.title === title)?.slug ??
              '';

            return {
              title,
              shortTitle: abbr,
              slug,
              description: item.description,
            };
          });
          setLiveDirections(mapped);
        } else {
          setLiveDirections(directions);
        }
      } catch {
        if (active) setLiveDirections(directions);
      }
    };

    loadDirections();
    const interval = setInterval(loadDirections, 10000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [slugMap]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Мы работаем по 9 направлениям деятельности</h2>
        <div className={styles.grid}>
          {liveDirections.map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
      </div>
    </section>
  );
}
