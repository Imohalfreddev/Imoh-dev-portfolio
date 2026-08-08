import Image from "next/image";
import { PiGithubLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { FaLink, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { project_data } from "../project_data";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  return (
    <main
      className="min-h-[calc(100svh-5.03rem)] lg:p-6 p-1 flex flex-col lg:gap-8 gap-4 "
      id="projects"
    >
      <section className="flex items-center gap-4 pt-2">
        <p className="text-2xl font-bold border-l-4 border-blue-600 pl-3">My Projects</p>
      </section>

      {/* Projects Section */}
      <section className=" flex justify-center items-center flex-col p-2 max-lg:gap-2">
        {project_data.map((e, index) => (
          <ScrollReveal
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            className="w-full flex justify-center"
          >
          <section
            className="card shadow-lg rounded-xl flex lg:flex-row flex-col gap-4 md:p-4 md:m-4 p-2 m-2 w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-5/6 xl:w-5/6"
          >
            {/* Image Section */}
            <section className="p-1 lg:w-1/2 shrink-0 flex items-center">
              <div className="relative w-full aspect-[16/10] rounded-lg shadow-lg overflow-hidden">
                <Image
                  className="object-cover"
                  src={`/projects/${e.image}`}
                  alt={`${e.title} by Alfred Imoh`}
                  priority={false}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 60vw, 90vw"
                />
              </div>
            </section>

            {/* Detail Section */}
            <section className="p-1 lg:p-2 gap-1 flex flex-col lg:w-2/3 min-w-0 lg:h-full">
              <h3 className="text-xl lg:text-2xl font-semibold line-clamp-2 min-h-[2rem] lg:min-h-[3.5rem]">{e.title}</h3>
              {/* Badges */}
              <section className="p-2 flex max-w-fit flex-wrap gap-2 h-[4.25rem] overflow-hidden content-start">
                {e.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded min-w-fit h-fit"
                  >
                    {badge}
                  </span>
                ))}
              </section>
              {/* Project Description */}
              <p className="lg:text-lg text-gray-700 lg:p-2 line-clamp-3 flex-1">
                {e.description}
              </p>
              {/* Project Buttons */}
              <section className="lg:p-2 flex justify-end gap-4 max-lg:p-3 mt-auto">
                {/* Github - only show if link exists */}
                {e.github ? (
                  <a
                    href={e.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View project source code on github"
                    className="flex flex-col items-center"
                  >
                    <PiGithubLogoFill className="bg-white transform hover:-translate-y-1.5 w-11 h-11 rounded-xl duration-500 text-black hover:bg-black p-1.5 hover:text-white" />
                    <span className="text-gray-700 text-sm pt-1.5 flex items-center">
                      Source Code <FaLink className="ml-2" />
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center opacity-40 cursor-not-allowed" title="Private Repository">
                    <PiGithubLogoFill className="bg-white w-11 h-11 rounded-xl text-black p-1.5" />
                    <span className="text-gray-500 text-sm pt-1.5 flex items-center">
                      Private <FaLock className="ml-2" />
                    </span>
                  </div>
                )}
                {/* Live - only show if link exists */}
                {e.live ? (
                  <a
                    href={e.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="view live project"
                    className="flex flex-col items-center"
                  >
                    <CgWebsite className="bg-white transform hover:-translate-y-1.5 w-11 h-11 rounded-xl duration-500 text-green-600 hover:bg-green-700 p-1.5 hover:text-white" />
                    <span className="text-gray-700 text-sm pt-1.5 flex items-center">
                      Live Project <FaExternalLinkAlt className="ml-2" />
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center opacity-40 cursor-not-allowed" title="Coming Soon">
                    <CgWebsite className="bg-white w-11 h-11 rounded-xl text-green-600 p-1.5" />
                    <span className="text-gray-500 text-sm pt-1.5 flex items-center">
                      Coming Soon <FaLock className="ml-2" />
                    </span>
                  </div>
                )}
              </section>
            </section>
          </section>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
};
export default Projects;