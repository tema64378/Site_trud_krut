'use client';

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/content/site";
import { useTheme } from "@/providers/theme-provider";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <header className="site-header">
        <div className="container header-inner">
          <Link className="logo" href="/">
            <Image
              src="/logo-dark.svg"
              alt="РСО"
              height={60}
              width={168}
              priority
            />
          </Link>
          <nav className="nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="theme-toggle" disabled title="Переключить тему">
              🌙
            </button>
            <Link className="cta" href="/admin">
              🔐
            </Link>
            <Link className="cta" href="/join">
              Вступить
            </Link>
          </div>
        </div>
      </header>
    );
  }
  
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/">
          <Image
            src={theme === 'dark' ? '/logo-white.svg' : '/logo-dark.svg'}
            alt="РСО"
            height={60}
            width={168}
            priority
          />
        </Link>
        <nav className="nav">
          {navItems.map((item) => (
            <div
              key={item.href}
              className={styles.navItemWrapper}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
              {(item as any).submenu && (
                <div
                  className={`${styles.submenu} ${
                    openDropdown === item.label ? styles.submenuOpen : ""
                  }`}
                >
                  {(item as any).submenu.map((subitem: any) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className={styles.submenuItem}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Переключить тему">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link className="cta" href="/admin">
            🔐
          </Link>
          <Link className="cta" href="/join">
            Вступить
          </Link>
        </div>
      </div>
    </header>
  );
}
