import { ArrowRight, Download } from "lucide-react";
import { profile, contact } from "../data/portfolio";
import { RichText } from "../utils/richText";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__status rise" style={{ animationDelay: "0ms" }}>
            <span className="hero__pulse" /> {profile.status}
          </span>

          <p className="hero__hello rise" style={{ animationDelay: "60ms" }}>
            Hi, I'm <strong>{profile.name}</strong> · {profile.role}
          </p>

          <h1 className="hero__headline rise" style={{ animationDelay: "100ms" }}>
            {profile.headline[0]} {profile.headline[1]}{" "}
            <span className="hero__grad">{profile.headline[2]}</span>
          </h1>

          <p className="hero__sub rise" style={{ animationDelay: "200ms" }}>
            <RichText text={profile.subIntro} />
          </p>

          <div className="hero__actions rise" style={{ animationDelay: "300ms" }}>
            <button className="btn btn-primary" onClick={() => scrollTo("#projects")}>
              View my work <ArrowRight size={16} />
            </button>
            <a className="btn" href={contact.resume} download>
              <Download size={16} /> Resume
            </a>
          </div>

          <dl className="hero__stats rise" style={{ animationDelay: "400ms" }}>
            {profile.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual rise" style={{ animationDelay: "250ms" }}>
          <div className="hero__photo">
            <img src={profile.photo} alt={profile.name} />
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...profile.marquee, ...profile.marquee].map((word, i) => (
            <span key={i}>
              {word} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
