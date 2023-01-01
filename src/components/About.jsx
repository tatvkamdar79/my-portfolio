import React from "react";
import { SiAboutdotme } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { SlDoc } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tatva-kamdar-2714631b3/",
      style: "rounded-tr-md rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/tatvkamdar79",
    },
    {
      id: 3,
      child: (
        <>
          LeetCode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/kamdartatv1/",
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kamdartatv79@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <SlDoc size={28} />
        </>
      ),
      href: "/Tatva_Kamdar_Resume.pdf",
      style: "rounded-br-md rounded-bl-md",
      download: true,
    },
  ];
  return (
    <div name="about">
      <div className="hidden lg:flex xl:flex w-full h-screen bg-gradient-to-b from-black to-black">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full text-cyan-500">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-500">
              About{" "}
              <SiAboutdotme
                size={32}
                className="inline text-green-400 relative bottom-[8px]"
              />
            </p>
          </div>

          <p className="text-xl mt-20 mx-20 text-center">
            Hey! I am Tatva Kamdar, an enthusiastic final-year student from KMIT
            and the Club Head of the Technical Club of KMIT -{" "}
            <a
              href="https://www.instagram.com/recurse.official/?hl=en"
              className="border-b-2 text-orange-500 border-cyan-500"
            >
              RECURSE{" "}
              <BsInstagram size={22} className="inline pb-1 text-white" />
            </a>
          </p>
        </div>
      </div>
      <div className="hidden min-[320px]:flex min-[320px]:flex-col min-[320px]:justify-center min-[320px]:items-center min-[1024px]:hidden w-full h-screen bg-black">
        <div className="pt-16 flex flex-col">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-500">
            About{" "}
            <SiAboutdotme
              size={32}
              className="inline text-green-400 relative bottom-[8px]"
            />
          </p>
        </div>
        <p className="text-xl mt-20 mx-20 text-center text-cyan-500">
          Hey! I am Tatva Kamdar, an enthusiastic final-year student from KMIT
          and the Club Head of the Technical Club of KMIT -{" "}
          <a
            href="https://www.instagram.com/recurse.official/?hl=en"
            className="border-b-2 text-orange-500 border-cyan-500"
          >
            RECURSE <BsInstagram size={22} className="inline pb-1 text-white" />
          </a>
        </p>
        <div className="m-4 p-4 text-lg text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-300 to-pink-600">
          <p>Check out my profiles on the following platforms</p>
        </div>
        <div className="flex items-center">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-center items-center w-48 h-20 px-4 hover:scale-110 hover:rounded-md duration-300 bg-gray-500 text-xl" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="font-semibold flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
