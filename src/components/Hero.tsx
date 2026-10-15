import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "../data/portfolio";
import { RichText } from "../utils/richText";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <motion.span
          className="eyebrow mono hero__badge"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.badge}
        </motion.span>

        <motion.h1
          className="hero__headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {profile.headline.map((word, i) => (
            <span className="hero__headline-line" key={i}>
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="hero__intro"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {profile.intro}
        </motion.p>

        <motion.p
          className="hero__sub muted"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <RichText text={profile.subIntro} />
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button className="btn btn-primary" onClick={() => scrollTo("#projects")}>
            VIEW MY WORK <ArrowRight size={16} />
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo("#about")}>
            MORE ABOUT ME
          </button>
        </motion.div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...profile.marquee, ...profile.marquee].map((word, i) => (
            <span key={i}>
              {word} <span className="accent">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
