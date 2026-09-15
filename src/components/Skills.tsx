import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <h2 className="section-heading">
            {t.skills.heading}
            <span className="tag">{t.skills.tag}</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div>
                <h3 style={{ fontSize: "0.88rem", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
                  {group.label}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.94rem",
                        padding: "8px 0",
                        borderTop: "1px solid var(--line)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
