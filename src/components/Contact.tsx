import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { contact } from "../data/portfolio";
import { RichText } from "../utils/richText";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="container contact__inner">
        <motion.span
          className="eyebrow mono"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {contact.eyebrow}
        </motion.span>

        <motion.h2
          className="contact__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          className="muted contact__body"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RichText text={contact.body} />
        </motion.p>

        <motion.p
          className="mono contact__closing"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contact.closingLine}
        </motion.p>

        <motion.div
          className="contact__actions"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={`mailto:${contact.email}`}
            className="btn btn-primary"
          >
            <Mail size={16} /> EMAIL ME
          </a>
          <a href={contact.resume} className="btn btn-ghost" download>
            <FileDown size={16} /> RESUME
          </a>
        </motion.div>

        <p className="mono muted contact__details">
          {contact.email} · {contact.phone}
        </p>

        <div className="contact__social">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="contact__social-link">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="contact__social-link">
            <Mail size={20} />
          </a>
          <a href={`tel:${contact.phone}`} aria-label="Call" className="contact__social-link">
            <Phone size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
