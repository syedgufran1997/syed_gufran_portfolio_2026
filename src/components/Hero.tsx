import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { shared } from "../i18n/content";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      style={{ borderTop: "none", paddingTop: 120, paddingBottom: 72 }}
    >
      <div className="wrap hero-grid">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ display: "inline-block", marginBottom: 24 }}
          >
            <span style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
              {t.hero.kicker}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.25,
              }}
              style={{
                height: 2,
                background: "var(--accent)",
                marginTop: 8,
                transformOrigin: "0 0",
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            style={{
              fontSize: "clamp(1.9rem, 4.2vw, 3.1rem)",
              lineHeight: 1.25,
              maxWidth: 620,
            }}
          >
            {t.hero.headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            style={{
              display: "flex",
              gap: 14,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <a href="#work" className="btn btn-primary">
              {t.hero.ctaWork}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.ctaContact}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: "flex",
              gap: 10,
              marginTop: 44,
              flexWrap: "wrap",
            }}
          >
            {shared.stack.map((tech) => (
              <span
                key={tech}
                className="mono"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  border: "1px solid var(--line)",
                  padding: "5px 11px",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          style={{
            background: "var(--surface)",
            padding: "24px 26px",
            fontSize: "0.92rem",
          }}
        >
          <dl style={{ margin: 0 }}>
            {[
              { label: t.hero.statusLabel, value: t.hero.statusValue },
              { label: t.hero.projectLabel, value: t.hero.projectValue },
              { label: t.hero.basedLabel, value: t.hero.basedValue },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <dt style={{ color: "var(--muted)" }}>{row.label}</dt>
                <dd style={{ margin: 0, fontWeight: 600, textAlign: "end" }}>
                  {row.value}
                </dd>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                padding: "12px 0",
              }}
            >
              <dt style={{ color: "var(--muted)" }}>{t.hero.reachLabel}</dt>
              <dd style={{ margin: 0 }}>
                <a
                  href={`mailto:${shared.email}`}
                  className="mono"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                  }}
                >
                  {shared.email}
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
