import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import Reveal from "./Reveal";

export default function Work() {
  const { t } = useLanguage();

  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <h2 className="section-heading">
            {t.work.heading}
            <span className="tag">{t.work.tag}</span>
          </h2>
        </Reveal>

        <div>
          {t.work.items.map((project, index) => {
            const href = shared.projectHrefs[index];
            const stack = shared.projectStacks[index];
            return (
              <Reveal key={project.name} delay={Math.min(index * 0.04, 0.16)}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  style={{
                    borderTop: index === 0 ? "1px solid var(--line)" : "none",
                    borderBottom: "1px solid var(--line)",
                    paddingBlock: 32,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <span
                      style={{ color: "var(--muted)", fontSize: "0.86rem" }}
                    >
                      {project.client}
                    </span>
                  </div>

                  <motion.div
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      height: 2,
                      background: "var(--accent)",
                      marginTop: 10,
                      transformOrigin: "0 0",
                    }}
                  />

                  <p
                    style={{
                      marginTop: 16,
                      maxWidth: 600,
                      fontSize: "0.98rem",
                    }}
                  >
                    {project.description}
                  </p>

                  <ul style={{ marginTop: 14 }}>
                    {project.points.map((point, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: 10,
                          marginBottom: 8,
                          fontSize: "0.92rem",
                          color: "var(--muted)",
                          maxWidth: 580,
                        }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      marginTop: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="mono"
                        style={{
                          fontSize: "0.74rem",
                          color: "var(--muted)",
                          border: "1px solid var(--line)",
                          padding: "4px 9px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
