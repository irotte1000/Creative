import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section id="service" className="max-h-screen">
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center space-x-5">
          <div>
            <Image
              src="/images/service.jpg"
              width={600}
              height={400}
              alt="about"
            />
          </div>
          <div className="flex flex-col mt-5 w-1/2">
            <h3 className="text-xl text-green-400 uppercase tracking-widest">
              our service
            </h3>
            <h1 className="text-6xl font-bold uppercase tracking-wider leading-tight mb-5 ">
              make your website super
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
        </div>
      </div>
    </section>
  );
};

export default Services;
