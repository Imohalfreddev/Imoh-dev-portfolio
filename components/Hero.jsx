"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import HeroParallax from "./HeroParallax";
import TypewriterHero from "./TypewriterHero";

const Hero = () => {
  const [showWhatsAppBadge, setShowWhatsAppBadge] = useState(false);
  const triggeredRef = useRef(false);

  const playNotificationSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      const playTone = (freq, start, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + start);
        gain.gain.linearRampToValueAtTime(0.15, now + start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + start);
        osc.stop(now + start + duration);
      };

      playTone(880, 0, 0.15);
      playTone(1244, 0.12, 0.2);
    } catch (err) {
      // Audio not supported/blocked — badge still shows silently.
    }
  };

  useEffect(() => {
    const triggerBadge = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;

      const delay = setTimeout(() => {
        setShowWhatsAppBadge(true);
        playNotificationSound();
      }, 2500);

      return () => clearTimeout(delay);
    };

    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((evt) => window.addEventListener(evt, triggerBadge, { once: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, triggerBadge));
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Alfred_Imoh_Resume.pdf";
    link.download = "Alfred_Imoh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <main className="min-h-[calc(100svh-5.03rem)] md:flex-row flex flex-col-reverse justify-center items-center gap-4">
      {/* Left Section */}
      <section className=" max-w-3xl min-h-xl p-4 flex flex-col gap-3 m-4">
        <TypewriterHero />
        <p className="lg:text-2xl text-lg text-gray-600">
          I&apos;m a full-stack software engineer who builds modern, end-to-end web applications with a focus on clean code and real-world impact. I work across the full stack, React, Node.js, FastAPI, and PostgreSQL.
        </p>

        <p className="lg:text-2xl text-lg text-gray-600">
          I use Tailwind CSS to create responsive, polished interfaces and have shipped products across SaaS, eCommerce, and lead generation. I&apos;m a fast learner who adapts quickly to any stack a project requires. Currently open to new opportunities.
        </p>

        <section className="flex flex-col gap-6">
          {/* Social Media Icons */}
          <section className="flex items-center gap-4 mt-3">
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/imoh-alfred-99a4a8258"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my linkedin profile"
            >
              <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
            </a>
            {/* Github */}
            <a
              href="https://github.com/Imohalfreddev"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my github profile"
            >
              <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black  hover:bg-black p-1.5 hover:text-white" />
            </a>
            {/* X */}
            <a
              href="https://x.com/Alfred_Imoh"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my x profile"
            >
              <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/imoh_automation?igsh=NzhhcWpranc1amY2"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my instagram profile"
            >
              <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61589650123060"
              target="_blank"
              rel="noreferrer"
              aria-label="Goto my facebook profile"
            >
              <FaFacebook className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-600 hover:bg-blue-600 p-1.5 hover:text-white" />
            </a>
          </section>
          {/* Buttons */}
          <section className="flex gap-4">
            <Link href="mailto:imohalfred8@gmail.com">
              <button
                className="animate-tilt3d flex items-center px-3 py-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                aria-label="Contact Button"
              >
                <IoIosMail size={24} />
                <span className="ml-1.5 md:text-lg">Contact</span>
              </button>
            </Link>

            <button
              className="animate-tilt3d flex items-center px-3 py-2 bg-red-700 hover:bg-red-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
              onClick={handleDownloadResume}
              aria-label="Resume Download Button"
            >
              <IoDocumentText size={22} />
              <span className="ml-1.5 md:text-lg">Resume</span>
            </button>
          </section>
        </section>
      </section>

      {/* Right Section: hero illustration, visible at all breakpoints */}
      <section className="lg:max-w-lg max-w-xs w-full p-4 mx-auto lg:mx-0">
        <HeroParallax>
          {/* Desktop */}
          <Image
            className="max-w-xl rounded-xl max-lg:hidden"
            src="/hero/bg.svg"
            alt="Alfred Imoh"
            height={300}
            width={350}
            priority
            style={{
              width: "350px",
              height: "auto",
            }}
          />
          {/* Mobile / Tablet */}
          <Image
            className="w-full h-auto rounded-xl lg:hidden"
            src="/hero/bg.png"
            alt="Alfred Imoh coding at desk"
            height={300}
            width={300}
            priority
          />
        </HeroParallax>
      </section>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348068953918"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-tilt3d fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        {showWhatsAppBadge && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex items-center justify-center rounded-full h-6 w-6 bg-red-500 border-2 border-white text-white text-xs font-bold">
              1
            </span>
          </span>
        )}
        <FaWhatsapp size={30} />
      </a>
    </main>
  );
};
export default Hero;