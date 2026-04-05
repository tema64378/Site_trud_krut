/**
 * CTASection.tsx
 * Секция с призывом к действию (заполнить анкету)
 */

import Link from 'next/link';
import styles from './CTASection.module.css';

export function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.title}>Готов начать?</h2>
          <p className={styles.subtitle}>
            Оставь заявку, и мы подберем отряд в твоем регионе.
          </p>
          <div className={styles.actions}>
            <Link className="button primary" href="/join">
              Заполнить анкету
            </Link>
            <Link className="button ghost" href="/contacts">
              Связаться с нами
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
