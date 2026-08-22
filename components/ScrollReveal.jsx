"use client";
import { motion } from "framer-motion";

/**
 * Wraps children in a 3D tilt-and-rise reveal that plays once, the first
 * time the element scrolls into view. Direction controls which way the
 * card tilts in from ("up" = rotates up from below, "left"/"right" = rotates
 * in from the side), which is what gives it a "premium" depth feel instead
 * of a flat fade/slide.
 *
 * Note: CSS perspective only creates real depth when it's set on an
 * *ancestor* of the transformed element — putting it on the same element
 * that also carries the rotateX/rotateY transform has no effect. So
 * perspective lives on the outer plain div here, and the 3D transform lives
 * on the inner motion element.
 */
const directionVariants = {
  up: { rotateX: 35, y: 60 },
  left: { rotateY: -35, x: -50 },
  right: { rotateY: 35, x: 50 },
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}) => {
  const initialTilt = directionVariants[direction] || directionVariants.up;

  return (
    <div className={className} style={{ perspective: 1200 }}>
      <motion.div
        className="h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{
          opacity: 0,
          scale: 0.94,
          ...initialTilt,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
