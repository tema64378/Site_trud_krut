/**
 * HeroSection.tsx
 * Главная герой секция с приветствием и информацией
 */

import Link from 'next/link';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h1 className={styles.title}>РАБОТА ДЛЯ<br/>СТУДЕНТА</h1>
            <p className={styles.text}>
              Российские студенческие отряды — лучшее сообщество для молодых, по версии Росмолодёжи!
            </p>
            <p className={styles.text}>
              Студенты и школьники находят у нас работу, своих друзей, любовь и путешествия.
            </p>
            <div className={styles.actions}>
              <Link className="button primary" href="#anketa">
                Оставить заявку
              </Link>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.visual}>
              <div className={styles.stat}>
                <strong>400 000+</strong>
                <span>участников</span>
              </div>
              <div className={styles.stat}>
                <strong>85</strong>
                <span>регионов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
