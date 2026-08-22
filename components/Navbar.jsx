"use client";
import { useState } from "react";
import { FaBriefcase, FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="pl-3 pr-2 py-4 md:p-4 border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="flex">
        {/* Left Section */}
        <section className="w-1/2 md:w-1/2 p-2 text-xl md:text-2xl font-semibold flex justify-start items-center uppercase">
          Alfred Imoh
        </section>

        {/* Center Section */}
        <section className=" hidden md:flex justify-end items-center p-2">
          <ul className="flex gap-8 max-lg:gap-4 max-lg:text-sm text-gray-700 tracking-wider uppercase font-semibold">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="cursor-pointer hover:text-gray-950 hover:scale-105 hover:transition-all">
                <a href={link.href} aria-label={`Goto ${link.label} Section`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Right Section */}
        <section className="w-1/2 md:w-1/4 flex justify-end items-center gap-5">
          <Link
            href="mailto:imohalfred8@gmail.com"
            className="animate-tilt3d flex items-center whitespace-nowrap px-2.5 py-2 text-sm md:text-base md:px-3 bg-blue-700 hover:bg-blue-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-95 transition-transform"
            aria-label="Hire Me Button"
          >
            <FaBriefcase />
            <span className="ml-1.5">Hire Me</span>
          </Link>

          {/* Mobile menu toggle — 3D coin-flip between bars and X */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100"
            style={{ perspective: "600px" }}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="relative inline-block w-6 h-6 transition-transform duration-500 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: menuOpen ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <FaBars
                size={22}
                className="absolute inset-0"
                style={{ backfaceVisibility: "hidden" }}
              />
              <FaXmark
                size={22}
                className="absolute inset-0"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              />
            </span>
          </button>
        </section>
      </div>

      {/* Mobile dropdown menu — 3D unfold from the top */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: menuOpen ? "320px" : "0px",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "perspective(800px) rotateX(0deg)" : "perspective(800px) rotateX(-15deg)",
          transformOrigin: "top",
        }}
      >
        <ul
          className="flex flex-col gap-1 pt-4 text-gray-700 tracking-wider uppercase font-semibold"
          style={{ perspective: "800px" }}
        >
          {NAV_LINKS.map((link, idx) => (
            <li
              key={link.label}
              className="transition-all duration-500 ease-out"
              style={{
                transformOrigin: "top center",
                transform: menuOpen
                  ? "rotateX(0deg) translateY(0px)"
                  : "rotateX(-90deg) translateY(-8px)",
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? `${idx * 80}ms` : "0ms",
              }}
            >
              <a
                href={link.href}
                aria-label={`Goto ${link.label} Section`}
                className="block px-2 py-3 border-b border-gray-100 hover:text-gray-950"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
