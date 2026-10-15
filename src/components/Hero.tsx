import { ArrowRight, Download } from "lucide-react";
import { profile, contact } from "../data/portfolio";
import { RichText } from "../utils/richText";
import Terminal from "./Terminal";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__status mono rise" style={{ animationDelay: "0ms" }}>
            <span className="hero__pulse" /> {profile.status}
          </span>

          <div className="hero__hello rise" style={{ animationDelay: "80ms" }}>
            <img className="hero__avatar" src={profile.photo} alt={profile.name} />
            <p className="mono">
              Hi, I'm <strong>{profile.name}</strong>
              <br />
              <span>{profile.role}</span>
            </p>
          </div>

          <h1 className="hero__headline rise" style={{ animationDelay: "160ms" }}>
            {profile.headline[0]} {profile.headline[1]}{" "}
            <span className="hero__grad">{profile.headline[2]}</span>
          </h1>

          <p className="hero__sub muted rise" style={{ animationDelay: "240ms" }}>
            <RichText text={profile.subIntro} />
          </p>

          <div className="hero__actions rise" style={{ animationDelay: "320ms" }}>
            <button className="btn btn-primary" onClick={() => scrollTo("#projects")}>
              View my work <ArrowRight size={16} />
            </button>
            <a className="btn btn-ghost" href={contact.resume} download>
              <Download size={16} /> Resume
            </a>
          </div>

          <dl className="hero__stats rise" style={{ animationDelay: "400ms" }}>
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd className="mono">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual rise" style={{ animationDelay: "300ms" }}>
          <Terminal />
          <div className="hero__chips" aria-hidden="true">
            {["AWS", "Terraform", "Docker", "Grafana"].map((c, i) => (
              <span key={c} className="mono hero__chip" style={{ animationDelay: `${i * 0.6}s` }}>
                {c}
              </span>
            ))}
          </div>
        </div>
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
