import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { shared } from "../i18n/content";

export default function Nav() {
  const { t, lang, toggle } = useLanguage();
  const [active, setActive] = useState<string>("");

  const links = [
    { id: "work", label: t.nav.work },
    { id: "experience", label: t.nav.experience },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <nav
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          minHeight: 64,
          paddingBlock: 12,
        }}
      >
        <a
          href="#top"
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            textDecoration: "none",
          }}
        >
          Syed Gufran
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                fontSize: "0.92rem",
                textDecoration: "none",
                color: active === link.id ? "var(--ink)" : "var(--muted)",
                paddingBottom: 4,
                borderBottom:
                  active === link.id
                    ? "1px solid var(--accent)"
                    : "1px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggle}
            aria-label="Switch language"
            style={{
              background: "none",
              border: "1px solid var(--line)",
              padding: "6px 12px",
              fontSize: "0.85rem",
              cursor: "pointer",
              color: "var(--ink)",
            }}
          >
            {lang === "en" ? "العربية" : "English"}
          </button>

          <a
            href={shared.resumeHref}
            download
            className="btn btn-primary "
            style={{ padding: "8px 16px", fontSize: "0.88rem" }}
          >
            {t.nav.resume}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
