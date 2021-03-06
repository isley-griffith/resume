import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex align-center justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/isley-griffith"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
          href="mailto:isleygriffith@gmail.com"
        >
          <FaRegEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>
      <div className="flex align-center justify-center mt-4">
        <p className="text-black mb-4">
          Made by
          <a
            className="text-blue-500 hover:underline"
            href="mailto:isleygriffith@gmail.com"
          >
            {" "}
            Isley Griffith
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
