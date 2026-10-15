import { motion } from "framer-motion";
import { about, profile } from "../data/portfolio";
import { RichText } from "../utils/richText";
import SectionHeading from "./SectionHeading";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about" aria-label="About me">
      <div className="container">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

        <div className="about__grid">
          <motion.div
            className="about__portrait"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__portrait-frame">
              <div className="about__portrait-placeholder mono">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <p className="mono about__portrait-caption">
              <strong>{profile.name}</strong>
              <br />
              {profile.role}
            </p>
          </motion.div>

          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about__kicker">
              <RichText text={about.kicker} />
            </p>

            {about.paragraphs.map((p, i) => (
              <p key={i} className="muted about__paragraph">
                {p}
              </p>
            ))}

            <blockquote className="about__quote">
              <p className="mono">{about.closingQuote}</p>
              <cite className="muted">{about.closingSub}</cite>
            </blockquote>

            <div className="about__stats">
              {about.stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="mono muted about__stat-label">{stat.label}</span>
                  <span className="about__stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
