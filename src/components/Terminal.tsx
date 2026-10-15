import { useEffect, useState } from "react";
import { terminal } from "../data/portfolio";

// Typed DevOps "pipeline run" shown in the hero. Respects reduced motion.
export default function Terminal() {
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [shown, setShown] = useState(reduce ? terminal.lines.length : 0);

  useEffect(() => {
    if (reduce || shown >= terminal.lines.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), 650);
    return () => clearTimeout(t);
  }, [shown, reduce]);

  return (
    <div className="terminal" aria-label="Sample pipeline output">
      <div className="terminal__bar">
        <i /> <i /> <i />
        <span className="mono">{terminal.title}</span>
      </div>
      <div className="terminal__body mono">
        {terminal.lines.slice(0, shown).map((l, i) => (
          <p key={i} className={`terminal__line terminal__line--${l.kind}`}>
            {l.kind === "cmd" && <span className="accent">$ </span>}
            {l.kind === "ok" && <span className="terminal__ok">✔ </span>}
            {l.text}
          </p>
        ))}
        <span className="terminal__cursor" />
      </div>
    </div>
  );
}
