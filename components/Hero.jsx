"use client";
import { useEffect, useRef, useState } from "react";
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

      const start = () => {
        const now = ctx.currentTime;

        const playTone = (freq, offset, duration) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0, now + offset);
          gain.gain.linearRampToValueAtTime(0.15, now + offset + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + duration);
        };

        playTone(880, 0, 0.15);
        playTone(1244, 0.12, 0.2);

        // Free the AudioContext once the tones finish so the next
        // page load (or replay) doesn't run into a suspended/stuck context.
        setTimeout(() => ctx.close(), 500);
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(start);
      } else {
        start();
      }
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
    <main className="lg:min-h-[calc(100svh-5.03rem)] flex flex-col gap-4 p-4">
      <TypewriterHero />

      {/* Card + Video row: stretched to equal height */}
      <section className="flex md:flex-row flex-col-reverse gap-4 items-stretch">
        {/* Bio Card (base) */}
        <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-5 flex flex-col gap-4 justify-center max-w-3xl w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-2">
            <p className="lg:text-xl text-base text-gray-600">
              I enjoy turning ideas into products that are useful, intuitive, and built to last. What I like most about software development is taking a problem, understanding what needs to be solved, and turning that into something people can actually use.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-2">
            <p className="lg:text-xl text-base text-gray-600">
              I approach every project with attention to both the technical details and the overall experience. I believe good software should be reliable behind the scenes while remaining simple, clear, and enjoyable for the people using it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-2">
            <p className="lg:text-xl text-base text-gray-600">
              I&apos;m driven by curiosity, quality, and the opportunity to work on projects that have a clear purpose and real-world value.
            </p>
          </div>
        </section>

        {/* Hero video, stretched to match the card's height exactly, no crop */}
        <section className="lg:max-w-2xl max-w-md w-full mx-auto md:mx-0 flex">
          <HeroParallax>
            <div className="w-full aspect-[5/4] md:aspect-auto md:h-full rounded-xl shadow-lg bg-black overflow-hidden flex items-center justify-center">
              <video
                className="w-full h-full object-fill"
                src="/hero/intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Alfred Imoh intro video"
              />
            </div>
          </HeroParallax>
        </section>
      </section>

      {/* Socials + Buttons */}
      <section className="flex flex-wrap items-center gap-4 max-w-3xl mt-3">
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

        {/* Divider before action buttons, hidden on very narrow screens */}
        <span className="hidden sm:block w-px h-8 bg-gray-300 mx-1" />

        {/* Buttons */}
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