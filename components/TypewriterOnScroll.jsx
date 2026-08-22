"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Types out `text` character-by-character once it scrolls into view.
 * Renders as `as` (default "p"), keeps a fixed-height wrapper via
 * min-width/inline-block cursor so layout doesn't jump while typing.
 */
const TypewriterOnScroll = ({
  text,
  as: Tag = "p",
  className = "",
  speed = 30,
  cursorClassName = "bg-blue-700",
  threshold = 0.4,
}) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!started || done) return;

    if (charIndex < text.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(timeout);
  }, [started, charIndex, text, speed, done]);

  const displayed = started ? text.slice(0, charIndex) : "";
  const cursorVisible = started && !done;

  return (
    <Tag ref={ref} className={className}>
      {displayed}
      <span
        className={`inline-block w-0.5 h-[0.9em] ml-0.5 align-middle animate-pulse transition-opacity duration-300 ${cursorVisible ? "opacity-100" : "opacity-0"} ${cursorClassName}`}
      />
      {/* Reserve layout space so nothing shifts before typing starts */}
      {!started && <span className="invisible">{text}</span>}
    </Tag>
  );
};

export default TypewriterOnScroll;
