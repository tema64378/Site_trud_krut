'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { centralMembers } from '@/content/central-structure';
import { groupSlugs } from '@/content/structure-groups';

export default function StructureSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length >= 2
    ? centralMembers.filter((m) =>
        m.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="struct-search-wrap" ref={wrapRef}>
      <svg className="struct-search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <path d="M13.5 13.5L18 18" strokeLinecap="round" />
      </svg>
      <input
        className="struct-search-input"
        type="text"
        placeholder="Поиск по фамилии..."
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
      />
      {open && query.trim().length >= 2 && (
        <div className="struct-search-dropdown">
          {results.length === 0 ? (
            <div className="struct-search-empty">Ничего не найдено</div>
          ) : (
            results.map((m) => {
              const slug = groupSlugs[m.group];
              const id = encodeURIComponent(m.name);
              return (
                <Link
                  key={m.name}
                  href={`/about/structure/${slug}#${id}`}
                  className="struct-search-item"
                  onClick={() => { setQuery(''); setOpen(false); }}
                >
                  <span className="struct-search-name">{m.name}</span>
                  <span className="struct-search-dept">{m.group}</span>
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
