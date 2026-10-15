import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { spotlight } from "../hooks";
import SectionHeading from "./SectionHeading";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-label="Projects">
      <div className="container">
        <SectionHeading eyebrow={projects.eyebrow} heading={projects.heading} />

        <div className="projects__list">
          {projects.items.map((project, i) => (
            <motion.article
              key={project.index}
              className="projects__item"
              onMouseMove={spotlight}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <span className="mono projects__index">{project.index}</span>

              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>
                <ul className="projects__bullets">
                  {project.bullets.map((b) => (
                    <li key={b} className="muted">{b}</li>
                  ))}
                </ul>
                <ul className="projects__tech">
                  {project.tech.map((t) => (
                    <li key={t} className="mono">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
