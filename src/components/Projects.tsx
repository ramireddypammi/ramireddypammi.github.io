import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <span className="mono projects__index">{project.index}</span>

              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>
                <p className="muted projects__description">{project.description}</p>
                <ul className="projects__tech">
                  {project.tech.map((t) => (
                    <li key={t} className="mono">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.link}
                className="projects__link"
                aria-label={`View ${project.title} project details`}
              >
                <ArrowUpRight size={20} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
