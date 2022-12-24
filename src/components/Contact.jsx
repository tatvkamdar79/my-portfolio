import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-orange-500">
            Contact{" "}
            {/* <FaRegHandshake
              size={40}
              className="text-white inline relative bottom-[2px]"
            /> */}
            <IoCallOutline
              size={30}
              className="text-orange-500 inline relative bottom-[3px]"
            />
          </p>
          <p className="py-6 text-cyan-500">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 border-teal-500 rounded-md text-white focus:transition focus:duration-500 focus:border-orange-500 focus: outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 border-teal-500 rounded-md text-white focus:transition focus:duration-500 focus:border-orange-500 focus: outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 border-teal-500 rounded-md text-white focus:transition focus:duration-500 focus:border-orange-500 focus: outline-none"
            ></textarea>

            <button className="font-semibold text-black bg-gradient-to-l from-cyan-200 to-teal-500 cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 transition ease-in-out hover:-translate-y-1 hover:bg-gradient-to-r hover:from-amber-200 hover:to-orange-600 duration-500">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
