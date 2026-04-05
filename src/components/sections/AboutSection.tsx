/**
 * AboutSection.tsx
 * Секция с основными преимуществами организации
 */

import { aboutHighlights } from '@/content/site';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Почему каждый год сотни тысяч студентов и школьников работают с нами?</h2>
        <div className={styles.grid}>
          {aboutHighlights.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
