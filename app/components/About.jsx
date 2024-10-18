import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#f9f9f9] max-h-screen">
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center space-x-5">
          <div className="flex flex-col mt-5 w-1/2">
            <h3 className="text-xl text-green-400 uppercase tracking-widest">
              who we are
            </h3>
            <h1 className="text-6xl font-bold uppercase tracking-wider leading-tight mb-5 ">
              creativity is having fun
            </h1>
            <p className="text-gray-600 leading-7">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard .
            </p>
            <button className="bg-green-400 text-white px-5 py-3 rounded-full w-1/4 text-base uppercase tracking-widest mt-10 hover:shadow-lg hover:bg-green-500">
              learn more
            </button>
          </div>

          <div>
            <Image
              src="/images/about.jpg"
              width={600}
              height={400}
              alt="about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
