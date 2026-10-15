import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "../data/portfolio";
import { spotlight } from "../hooks";
import SectionHeading from "./SectionHeading";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-label="Experience">
      <div className="container">
        <SectionHeading eyebrow={experience.eyebrow} heading={experience.heading} />

        <div className="experience__list">
          {experience.items.map((job, i) => (
            <motion.div
              key={job.role + job.period}
              className="experience__card"
              onMouseMove={spotlight}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{job.role}</h3>
                  <p className="experience__company">{job.company}</p>
                  <p className="mono muted experience__loc">
                    <MapPin size={13} /> {job.location}
                  </p>
                </div>
                <span className="mono experience__period">{job.period}</span>
              </div>

              <ul className="experience__bullets">
                {job.bullets.map((b) => (
                  <li key={b} className="muted">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
