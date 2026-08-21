"use client";
import { FaInstagram, FaReact, FaFacebook, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiLinkedinFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFastapi, SiPostgresql, SiPython, SiNextdotjs, SiHtml5, SiShopify, SiWix, SiWordpress } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbSeo } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import HeroParallax from "./HeroParallax";
import TypewriterOnScroll from "./TypewriterOnScroll";

import React from "react";

const frontendSkills = [
  { icon: <RiJavascriptFill size={50} className="text-yellow-500" />, label: "Javascript" },
  { icon: <FaReact size={50} className="text-sky-500" />, label: "React JS" },
  { icon: <SiNextdotjs size={50} className="text-black" />, label: "Next JS" },
  { icon: <SiHtml5 size={50} className="text-orange-500" />, label: "HTML5" },
  { icon: <RiTailwindCssFill size={50} className="text-cyan-400" />, label: "Tailwind CSS" },
];

const backendSkills = [
  { icon: <FaNodeJs size={45} className="text-green-500" />, label: "Node Js" },
  { icon: <SiExpress size={45} className="text-black" />, label: "Express JS" },
  { icon: <SiPython size={45} className="text-blue-500" />, label: "Python" },
  { icon: <SiFastapi size={45} className="text-green-500" />, label: "FastAPI" },
  { icon: <SiPostgresql size={45} className="text-blue-700" />, label: "PostgreSQL" },
];

const platformSkills = [
  { icon: <FaGitAlt size={45} className="text-orange-600" />, label: "Git" },
  { icon: <SiWordpress size={45} className="text-blue-600" />, label: "WordPress" },
  { icon: <SiShopify size={45} className="text-green-600" />, label: "Shopify" },
  { icon: <SiWix size={45} className="text-black" />, label: "Wix" },
  { icon: <TbSeo size={45} className="text-purple-600" />, label: "SEO & Sitemaps" },
];

const About = React.memo(function About() {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 justify-between items-center"
      id="about"
    >
      <section className="flex items-center gap-4 pt-3">
        <TypewriterOnScroll text="About Me" as="p" className="text-xl lg:text-2xl font-bold border-l-4 border-blue-600 pl-3" />
      </section>

      <section className="flex flex-col-reverse lg:flex-row lg:p-6 p-4 gap-6 mt-6 items-stretch">
        {/* left Section */}
        <ScrollReveal direction="left" className="w-full flex">
        <section className="w-full h-full p-2 rounded-xl py-6 lg:py-0.5 shadow-md border border-gray-100 bg-white flex  flex-col justify-start max-md:gap-6 lg:p-4">
          <section className="flex items-center gap-4 h-1/5 ">
            <TypewriterOnScroll text="My Skills" as="p" className="text-xl lg:text-2xl font-bold border-l-4 border-blue-600 pl-3" />
          </section>
          <section className="p-2 flex flex-col gap-2">
            <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
              {frontendSkills.map((skill, idx) => (
                <div key={skill.label} className="group flex justify-center items-center flex-col">
                  {skill.icon}
                  <span className="text-lg mt-1 transition-all duration-300 ease-out group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:tracking-wide">
                    {skill.label}
                  </span>
                </div>
              ))}
            </section>
          </section>
          <section className="p-2 flex flex-col gap-2">
            <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
              {backendSkills.map((skill, idx) => (
                <div key={skill.label} className="group flex justify-center items-center flex-col">
                  {skill.icon}
                  <span className="text-lg mt-1 transition-all duration-300 ease-out group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:tracking-wide">
                    {skill.label}
                  </span>
                </div>
              ))}
            </section>
          </section>
          <section className="p-2 flex flex-col gap-2">
            <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
              {platformSkills.map((skill, idx) => (
                <div key={skill.label} className="group flex justify-center items-center flex-col">
                  {skill.icon}
                  <span className="text-lg mt-1 transition-all duration-300 ease-out group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:tracking-wide">
                    {skill.label}
                  </span>
                </div>
              ))}
            </section>
          </section>
        </section>
        </ScrollReveal>

        {/* Right Section */}
        <ScrollReveal direction="right" className="w-full flex">
        <section className="w-full h-full p-3 flex flex-col justify-start gap-4 text-xl rounded-xl py-6 lg:p-6 card bg-white shadow-md border border-gray-100">
          <section className="flex items-center gap-4 ">
            <TypewriterOnScroll text="Profile" as="p" className="font-bold text-xl lg:text-2xl border-l-4 border-blue-600 pl-3" />
          </section>
          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            Full-stack software engineer with 3+ years of experience building and shipping web products from concept to production. I&apos;ve worked across SaaS platforms, eCommerce websites, lead-generation products, and custom business applications.
          </p>
          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            I work across the frontend and backend using React, Next.js, Node.js, FastAPI, Python, and PostgreSQL. My experience includes building responsive interfaces, APIs, database systems, authentication, third-party integrations, and production-ready applications.
          </p>
          <p className="lg:text-xl text-lg text-gray-700 font-normal">
            I&apos;m comfortable taking applications through deployment and ongoing maintenance across cloud platforms, Linux servers, VPS infrastructure, and CI/CD environments. I also build and customize WordPress, Shopify, and Wix websites for businesses that need a polished, reliable, and efficient online presence.
          </p>
          <section className="flex max-md:flex-col gap-6 md:items-center">
            {/* Social Media Icons */}
            <section className="flex items-center gap-4 mt-3">
              <a href="https://www.linkedin.com/in/imoh-alfred-99a4a8258" target="_blank" rel="noreferrer" aria-label="Goto my linkedin profile">
                <RiLinkedinFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-500 hover:bg-blue-500 p-1.5 hover:text-white" />
              </a>
              <a href="https://github.com/Imohalfreddev" target="_blank" rel="noreferrer" aria-label="Goto my github profile">
                <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
              </a>
              <a href="https://x.com/Alfred_Imoh" target="_blank" rel="noreferrer" aria-label="Goto my x profile">
                <FaXTwitter className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/imoh_automation?igsh=NzhhcWpranc1amY2" target="_blank" rel="noreferrer" aria-label="Goto my instagram profile">
                <FaInstagram className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-pink-500 hover:bg-pink-500 p-1.5 hover:text-white" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589650123060" target="_blank" rel="noreferrer" aria-label="Goto my facebook profile">
                <FaFacebook className="bg-white transform hover:-translate-y-1.5 w-12 h-12 rounded-xl duration-500 text-blue-600 hover:bg-blue-600 p-1.5 hover:text-white" />
              </a>
            </section>
            {/* Buttons */}
            <section className="flex gap-4">
              <Link href="mailto:imohalfred8@gmail.com">
                <button
                  className="flex items-center px-3 py-2 bg-blue-700 hover:bg-blue-800 rounded-md text-white outline-none focus:ring-1 shadow-lg transform active:scale-y-90 transition-transform"
                  aria-label="Contact Button"
                >
                  <IoIosMail size={24} />
                  <span className="ml-1.5 md:text-lg">Contact</span>
                </button>
              </Link>
            </section>
          </section>
        </section>
        </ScrollReveal>
      </section>
    </main>
  );
});
export default About;