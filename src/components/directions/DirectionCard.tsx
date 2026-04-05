/**
 * DirectionCard.tsx
 * Компонент для отображения карточки направления с эффектом переворота
 */

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/providers/theme-provider';
import { Direction } from '@/types';
import styles from './DirectionCard.module.css';

interface DirectionCardProps {
  direction: Direction;
}

export function DirectionCard({ direction }: DirectionCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc = `/svg/directions/${direction.slug}-color.svg`;

  return (
    <div className={`${styles.card} direction-link`}>
      <div className={styles.inner}>
        {/* Передняя сторона карточки */}
        <div className={styles.front}>
          <div className={styles.iconWrapper}>
            <img
              src={iconSrc}
              alt={direction.title}
              width="86"
              height="86"
              className={styles.icon}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{direction.title}</h3>
            <p className={styles.subtitle}>{direction.description}</p>
          </div>
        </div>

        {/* Задняя сторона карточки */}
        <div className={styles.back}>
          <h3 className={styles.backTitle}>{direction.shortTitle}</h3>
          <p className={styles.description}>{direction.description}</p>
          <Link href={`/directions/${direction.slug}`} className={styles.link}>
            Подробнее →
          </Link>
        </div>
      </div>
    </div>
  );
}
