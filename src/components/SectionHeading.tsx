import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
}

export default function SectionHeading({ eyebrow, heading }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="eyebrow mono">{eyebrow}</span>
      <h2 className="section-heading">{heading}</h2>
    </motion.div>
  );
}
