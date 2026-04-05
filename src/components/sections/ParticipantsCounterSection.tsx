'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './ParticipantsCounterSection.module.css';

const TARGET_PARTICIPANTS = 400000;
const START_OFFSET = 1500;
const START_PARTICIPANTS = TARGET_PARTICIPANTS - START_OFFSET;
const INCREMENT_INTERVAL_MS = 20;

export function ParticipantsCounterSection() {
  const [count, setCount] = useState(START_PARTICIPANTS);
  const [started, setStarted] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (started) return;

    const startCounter = () => {
      setStarted((prev) => (prev ? prev : true));
    };

    // Fallback: если observer не сработал, запускаем счетчик сами.
    const fallbackTimer = window.setTimeout(startCounter, 1800);

    if (!node || typeof IntersectionObserver === 'undefined') {
      startCounter();
      return () => window.clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const interval = window.setInterval(() => {
      setCount((prev) => {
        if (prev >= TARGET_PARTICIPANTS) {
          window.clearInterval(interval);
          return TARGET_PARTICIPANTS;
        }
        return prev + 1;
      });
    }, INCREMENT_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [started]);

  const formatted = useMemo(
    () => new Intl.NumberFormat('ru-RU').format(count),
    [count]
  );

  return (
    <section className={styles.section} ref={rootRef}>
      <div className="container">
        <div className={styles.card}>
          <div>
            <p className={styles.label}>Участников движения РСО</p>
            <p className={styles.counter}>{formatted}+</p>
            <p className={styles.note}>
              Студенты по всей стране уже выбрали отряды как путь к профессии.
            </p>
          </div>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span>Масштаб</span>
              <strong>Вся Россия</strong>
            </div>
            <div className={styles.metaItem}>
              <span>Развитие</span>
              <strong>Каждый год</strong>
            </div>
            <div className={styles.metaItem}>
              <span>Возможности</span>
              <strong>9 направлений</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
