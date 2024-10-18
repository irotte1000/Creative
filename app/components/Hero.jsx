"use client";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Hero = () => {
  const [showV, setShowV] = useState(false);
  const handleClick = () => {
    setShowV(!showV);
  };
  return (
    <section id="home" className="min-h-screen">
      <div className="container mx-auto py-20 mt-20">
        <div className="flex justify-start items-center space-x-80">
          <div className="flex flex-col justify-start space-y-8 w-1/2">
            <h1 className="text-6xl font-bold text-white uppercase leading-tight">
              Simple - Creative & easy to use
            </h1>
            <p className="text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard .
            </p>

            <div
              className={`border shadow-2xl shadow-black rounded-md overflow-hidden w-[900px] h-[500px] drop-shadow-sm group ${
                showV ? `absolute top-20` : `hidden`
              }`}
            >
              {showV ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src="/images/video.mp4" type="video/mp4"></source>
                </video>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
            <button
              className="bg-green-400 text-white px-5 py-3 rounded-full w-1/4 text-base uppercase tracking-widest
             hover:shadow-lg hover:bg-green-500"
            >
              contact us
            </button>
          </div>
          <button
            onClick={handleClick}
            className=" group w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-md hover:shadow-xl hover:scale-125 duration-300"
          >
            <BsFillPlayFill
              size={25}
              className="group-hover:scale-125 duration-300 group-hover:text-green-500"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
