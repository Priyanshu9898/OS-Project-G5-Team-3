import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../Navigation/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mainbody">
        <section class="text-gray-400 body-font bg-gray-900">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-red-400 tracking-widest font-medium title-font mb-1">
                OS PROJECT
              </h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Page Replacement Algorithms
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              The page replacement algorithm decides which memory page is to be replaced. The process of replacement is sometimes called swap out or write to disk. Page replacement is done when the requested page is not found in the main memory (page fault).
              </p>
            </div>
            <div class="flex flex-wrap">
              <div class="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 ">
                <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Priyanshu Malaviya
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  {" "}
                  20BCP158 <br /> ROLE HERE
                </p>
                <a class="text-red-400 inline-flex items-center ">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Neh Patel
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  {" "}
                  20BCP169 <br /> ROLE HERE
                </p>
                <a class="text-red-400 inline-flex items-center ">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Dev Dalia
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  20BCP156 <br /> ROLE HERE
                </p>
                <a class="text-red-400 inline-flex items-center ">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Vishwa Gajjar
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  20BCP171 <br /> ROLE HERE
                </p>
                <a class="text-red-400 inline-flex items-center ">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                  Shubh Kapadia
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  {" "}
                  20BCP170 <br /> ROLE HERE
                </p>
                <a class="text-red-400 inline-flex items-center ">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <Link to="/">
              <button class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                Main Page
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
