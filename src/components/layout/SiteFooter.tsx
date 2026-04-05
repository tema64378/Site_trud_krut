import Link from "next/link";
import { contactInfo, navItems } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-title">Российские студенческие отряды</div>
          <p className="muted">
            Объединяем студентов по всей стране и создаем возможности для работы,
            развития и дружбы.
          </p>
        </div>
        <div>
          <div className="footer-title">Разделы</div>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-title">Контакты</div>
          <div className="footer-contacts">
            <span>Горячая линия: {contactInfo.hotline}</span>
            <span>Дежурная часть: {contactInfo.duty}</span>
            <span>Журналисты: {contactInfo.press}</span>
            <span>{contactInfo.address}</span>
            <span>{contactInfo.email}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 РСО. Все права защищены.</div>
    </footer>
  );
}
