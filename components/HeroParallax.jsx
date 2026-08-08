"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Ties the hero image's rotation/scale/vertical offset directly to page
 * scroll progress (not just viewport-entry) so it feels alive from the
 * moment the page loads, not just a one-shot reveal.
 */
const HeroParallax = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [8, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div ref={ref} style={{ perspective: 1400 }}>
      <motion.div style={{ rotateX, y, scale, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
};

export default HeroParallax;
