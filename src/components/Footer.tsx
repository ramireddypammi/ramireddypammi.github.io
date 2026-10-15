import { profile } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono muted">
          © {year} {profile.name}
        </p>
        <p className="mono muted footer__tag">{profile.role.toUpperCase()} / DEVOPS</p>
      </div>
    </footer>
  );
}
