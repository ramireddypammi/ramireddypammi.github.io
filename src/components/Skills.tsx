import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { spotlight } from "../hooks";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills">
      <div className="container">
        <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />

        <div className="skills__grid">
          {skills.groups.map((group, i) => (
            <motion.div
              key={group.name}
              className="skills__card"
              onMouseMove={spotlight}
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

      </div>
    </section>
  );
}
