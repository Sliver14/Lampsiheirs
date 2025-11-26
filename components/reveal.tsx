// components/Reveal.tsx
import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }} 
    >
      {children}
    </motion.div>
  );
}
