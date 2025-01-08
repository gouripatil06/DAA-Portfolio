/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import Img from "../assets/images/img.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          Design and Analysis <br />
          of Algorithm
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          Exploring efficient solutions through <span className="font-semibold text-theme-blue">innovative implementations</span>!
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
          >
            See Our Work
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <div className="relative group">
            {/* Decorative background blob */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
            
            {/* Image container */}
            <div className="relative">
              <img 
                className="rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl" 
                src={Img} 
                alt="Algorithm Visualization"
              />
              
              {/* Optional decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-50" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
