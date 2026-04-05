/**
 * NewsSection.tsx
 * Секция с новостями и информацией о работе в регионах
 */

'use client';

import { useEffect, useState } from 'react';
import styles from './NewsSection.module.css';

interface NewsItem {
  id: string;
  title: string;
  text: string;
  date: string;
  image?: string;
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      if (response.ok) {
        const data = await response.json();
        setNews(data.slice(0, 3)); // Показываем только первые 3 новости
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPreviewText = (value: string) => {
    const plain = value
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (plain.length <= 150) return plain;
    return `${plain.slice(0, 150)}...`;
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Где работают студенческие отряды?</h2>
        <p className="section-subtitle">
          Российские студенческие отряды работают в разных регионах и сферах
        </p>
        {isLoading ? (
          <div className={styles.loading}>Загрузка новостей...</div>
        ) : news.length > 0 ? (
          <div className={styles.grid}>
            {news.map((item) => (
              <article className={styles.card} key={item.id}>
                {item.image && (
                  <div className={styles.image}>
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.text}>{getPreviewText(item.text)}</div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>Новостей еще нет</div>
        )}
      </div>
    </section>
  );
}
