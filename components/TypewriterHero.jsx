"use client";
import { useEffect, useState } from "react";

const LINES = [
  { text: "👋 Hi, I am", tag: "p", className: "lg:text-3xl text-2xl font-medium" },
  { text: "Alfred Imoh", tag: "h1", className: "lg:text-5xl text-4xl font-bold text-blue-700" },
  { text: "I am a Full Stack Developer", tag: "h2", className: "lg:text-4xl text-3xl font-medium" },
];

const TYPE_SPEED_MS = 45;
const LINE_PAUSE_MS = 250;
const CURSOR_HOLD_MS = 1600;

const TypewriterHero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const currentLine = LINES[lineIndex]?.text ?? "";

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED_MS);
      return () => clearTimeout(timeout);
    }

    if (lineIndex < LINES.length - 1) {
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => setDone(true), CURSOR_HOLD_MS);
    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, done]);

  return (
    <>
      {LINES.map((line, idx) => {
        const isPastLine = idx < lineIndex || done;
        const isCurrentLine = idx === lineIndex && !done;
        const text = isPastLine ? line.text : isCurrentLine ? line.text.slice(0, charIndex) : "";
        const cursorHeight = line.tag === "h1" ? "h-8 lg:h-10" : line.tag === "h2" ? "h-7 lg:h-9" : "h-6 lg:h-7";
        const cursor = isCurrentLine && (
          <span className={`inline-block w-0.5 ${cursorHeight} bg-blue-700 ml-1 align-middle animate-pulse`} />
        );
        const Tag = line.tag;
        return (
          <Tag key={line.text} className={line.className}>
            {text}
            {cursor}
          </Tag>
        );
      })}
    </>
  );
};

export default TypewriterHero;
