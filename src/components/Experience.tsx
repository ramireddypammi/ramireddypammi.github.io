import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { spotlight } from "../hooks";
import SectionHeading from "./SectionHeading";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-label="Experience">
      <div className="container">
        <SectionHeading eyebrow={experience.eyebrow} heading={experience.heading} />

        <motion.div
          className="experience__card"
          onMouseMove={spotlight}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience__header">
            <div>
              <h3 className="experience__role">{experience.role}</h3>
            </div>
            <span className="mono experience__period">{experience.period}</span>
          </div>

          <p className="muted experience__intro">{experience.focusIntro}</p>

          <ul className="experience__tags">
            {experience.focusAreas.map((area) => (
              <li key={area} className="mono">
                {area}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
