import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

function About() {
  return (
    <div>
      <div className="max-w-4xl mt-24 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
          Yo! 👋
        </p>
        <p className="text-base text-left md:text-center text-gray-500 leading-relaxed mt-4 justify-center">
          I'm a passionate React developer. I enjoy playing guitar, video games
          in my free time, and making interesting personal programming projects
        </p>
      </div>

      <ScrollIntoView selector="#tech">
        <div class="mx-auto p-20">
          <FaChevronDown class="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
