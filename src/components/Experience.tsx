import { useLanguage } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal>
          <h2 className="section-heading">
            {t.experience.heading}
            <span className="tag">{t.experience.tag}</span>
          </h2>
        </Reveal>

        <div>
          {t.experience.items.map((role, index) => {
            const dates = shared.experienceDates[index];
            const end = index === 0 ? t.experience.present : dates.end;
            return (
              <Reveal key={role.company} delay={index * 0.05}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr",
                    paddingBlock: 28,
                    borderBottom:
                      index === t.experience.items.length - 1
                        ? "none"
                        : "1px solid var(--line)",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.85rem",
                      paddingTop: 4,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                        {role.role} {t.experience.atWord} {role.company}
                      </h3>
                      <span
                        className="mono"
                        style={{ fontSize: "0.8rem", color: "var(--muted)" }}
                      >
                        {dates.start} – {end}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.88rem",
                        marginTop: 4,
                      }}
                    >
                      {role.location}
                    </p>
                    <ul style={{ marginTop: 14 }}>
                      {role.points.map((point, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 10,
                            marginBottom: 8,
                            fontSize: "0.95rem",
                            maxWidth: 620,
                          }}
                        >
                          <span
                            style={{ color: "var(--accent)", flexShrink: 0 }}
                          >
                            —
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
