import { useLanguage } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useLanguage();
  const dates = shared.educationDates;

  return (
    <section id="education" style={{ paddingBlock: 56 }}>
      <div className="wrap">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h3 style={{ fontSize: "1.02rem", fontWeight: 700 }}>{t.education.degree}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: 4 }}>
                {t.education.school}, {t.education.location} ({t.education.detail})
              </p>
            </div>
            <span className="mono" style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              {dates.start} – {dates.end}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
