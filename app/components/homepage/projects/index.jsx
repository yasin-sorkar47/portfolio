"use client";

import { projectsData } from "@/utils/data/projects-data";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Project from "./Project";

const Projects = () => {
  const swiperRef = useRef(null); // Create a reference to Swiper instance

  // Function to handle navigation
  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute z-50 -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex justify-center items-center gap-6">
          {projectsData.slice(0, 3).map((project, index) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
