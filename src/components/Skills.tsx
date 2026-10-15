import { motion } from "framer-motion";
import { skillGroups, allTechnologies } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills">
      <div className="container">
        <SectionHeading eyebrow="02 / SKILLS" heading="Tools I use to build and ship reliably." />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.name}
              className="skills__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <span className="mono skills__card-category">{group.category}</span>
              <h3 className="skills__card-title">{group.name}</h3>
              <ul className="skills__card-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="skills__all">
          <span className="mono skills__all-label muted">TECHNOLOGIES</span>
          <div className="skills__all-list">
            {allTechnologies.map((tech) => (
              <span key={tech} className="mono skills__pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
