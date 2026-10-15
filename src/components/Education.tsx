import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education" aria-label="Education">
      <div className="container">
        <SectionHeading eyebrow={education.eyebrow} heading={education.heading} />

        <div className="education__timeline">
          {education.items.map((item, i) => (
            <motion.div
              key={i}
              className="education__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="mono education__period">{item.period}</span>
              <div className="education__dot" aria-hidden="true" />
              <div className="education__content">
                <h3>{item.degree}</h3>
                {item.field && <p className="education__field">{item.field}</p>}
                <p className="muted education__institution">{item.institution}</p>
                {item.description && <p className="muted education__desc">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
