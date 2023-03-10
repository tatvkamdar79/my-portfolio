import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import myImg from "../assets/assets/Me/me2.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  to-black md:pb-20 lg:pb-20 xl:pb-20"
    >
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -250 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col justify-center sm: mt-36 sm: mb-10">
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-500">
            Hey! I'm Tatva Kamdar
          </h2>
          <p className="py-4 max-w-md text-orange-500">
            A meticulous final year computer science student committed to
            learning, developing and exploring various technical domains of the
            IT sphere. Can work well in both independent and collaborative
            environments. In possession of strong communication and leadership
            skills.
          </p>
          <div className="flex flex-row">
            <Link
              to="about"
              smooth
              duration={500}
              className="font-semibold group text-black w-fit pl-4 pr-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-teal-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <Link
              to="projects"
              smooth
              duration={500}
              className="font-semibold group text-black w-fit ml-3 pl-4 pr-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-400 cursor-pointer"
            >
              My Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>{" "}
        </div>

        <img
          src={myImg}
          alt="my profile"
          className="rounded-2xl sm:w-3/4 md:w-1/2 md:mt-[6rem]"
        />
      </motion.div>
    </div>
  );
};

export default Home;
