"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App runtime error:", error);
  }, [error]);

  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="hero-title">Произошла ошибка</h1>
        <p className="section-subtitle">
          Страница временно недоступна. Попробуйте обновить её.
        </p>
        <button className="button primary" onClick={() => reset()} style={{ marginTop: 20 }}>
          Обновить страницу
        </button>
      </div>
    </section>
  );
}
