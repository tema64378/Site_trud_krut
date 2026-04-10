'use client';
import { useEffect } from 'react';

export default function StructureTabScroll() {
  useEffect(() => {
    const active = document.querySelector<HTMLElement>('.struct-tab--active');
    if (active) {
      active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' });
    }
  }, []);
  return null;
}
