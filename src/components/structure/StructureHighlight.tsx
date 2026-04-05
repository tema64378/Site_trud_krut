'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function StructureHighlight() {
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const el = document.getElementById(encodeURIComponent(hash));
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('struct-card--highlight');
    setTimeout(() => el.classList.remove('struct-card--highlight'), 2500);
  }, []);

  return null;
}
