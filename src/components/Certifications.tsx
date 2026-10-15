import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications" aria-label="Certifications">
      <div className="container">
        <SectionHeading eyebrow={certifications.eyebrow} heading={certifications.heading} />

        <div className="certifications__list">
          {certifications.items.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="certifications__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="accent certifications__mark">◆</span>
              <div className="certifications__text">
                <h3>{cert.title}</h3>
                <p className="muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
