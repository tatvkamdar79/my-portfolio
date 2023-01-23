import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import omni from "../assets/Projects/Omni/omni.jpg";
import { BsFileEarmarkCodeFill } from "react-icons/bs";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: omni,
    },
    {
      id: 2,
      src: arrayDestruct,
    },
    {
      id: 3,
      src: reactParallax,
    },
    {
      id: 4,
      src: navbar,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: installNode,
    },
    {
      id: 7,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="projects"
      className="pt-20 bg-gradient-to-b from-black to-black w-full text-cyan-500 md:h-screen"
    >
      <div className="relative max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500">
            Projects{" "}
            <BsFileEarmarkCodeFill
              size={32}
              className="text-green-400
             inline relative bottom-[3px]"
            />
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0 sm: pb-20">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 border border-gray-600 rounded-md duration-200 hover:scale-105 hover:border-gray-400 hover:text-yellow-600 hover:font-extrabold">
                  More
                </button>
                <button className="w-1/2 px-6 py-3 m-4 border border-gray-600 rounded-md duration-200 hover:scale-105 hover:border-gray-400 hover:text-yellow-600 hover:font-extrabold">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
