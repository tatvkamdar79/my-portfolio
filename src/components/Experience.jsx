import React from "react";
import html from "../assets/assets/html.png";
import css from "../assets/assets/css.png";
import javascript from "../assets/assets/javascript.png";
import reactImage from "../assets/assets/react.png";
import github from "../assets/assets/github.png";
import tailwind from "../assets/assets/tailwind.png";
import Arduino from "../assets/assets/Arduino.png";
import Python from "../assets/assets/Python.png";
import Java from "../assets/assets/java.png";
import opencv from "../assets/assets/openCV.png";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 2,
      src: Java,
      title: "Java",
      style: "shadow-amber-600",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: opencv,
      title: "OpenCV",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: Arduino,
      title: "Arduino",
      style: "shadow-[#00979D]",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-black w-full py-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-cyan-500 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-orange-500 text-4xl font-bold border-b-4 border-white pb-1 inline">
            Experience{" "}
            <FaUserGraduate
              size={32}
              className="text-white inline relative bottom-1.5"
            />
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0 font-bold text-lg">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`relative shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              transition={{
                delay: id * 0.3,
                duration: 0.3,
                default: { ease: "linear" },
                damping: 0.3,
              }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={src} alt="" className="w-20 mx-auto mb-8" />
              <div className="flex flex-col">
                <p className="text-center">{title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
