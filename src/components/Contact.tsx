import { useLanguage } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" style={{ paddingBottom: 96 }}>
      <div className="wrap">
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.6vw, 2.4rem)",
              maxWidth: 560,
              lineHeight: 1.3,
            }}
          >
            {t.contact.heading}
          </h2>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: 480,
              marginTop: 18,
              fontSize: "1rem",
            }}
          >
            {t.contact.body}
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <a
              href={`mailto:${shared.email}`}
              className="btn btn-primary mono"
              style={{ fontSize: "0.9rem" }}
            >
              {shared.email}
            </a>
            <a href={shared.resumeHref} download className="btn btn-secondary">
              {t.contact.downloadResume}
            </a>
          </div>

          <div
            className="mono"
            style={{
              display: "flex",
              gap: 22,
              marginTop: 40,
              flexWrap: "wrap",
              fontSize: "0.85rem",
            }}
          >
            <a
              href={shared.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--muted)" }}
            >
              GitHub
            </a>
            <a
              href={shared.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--muted)" }}
            >
              LinkedIn
            </a>
            <span style={{ color: "var(--muted)" }}>{shared.phone}</span>
          </div>
        </Reveal>

        <p style={{ marginTop: 8, color: "var(--muted)", fontSize: "0.8rem" }}>
          {t.contact.footer}
        </p>
      </div>
    </section>
  );
}
