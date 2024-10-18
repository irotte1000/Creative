import Image from "next/image";
import React from "react";
import SocialIcon from "./SocialIcon";

function CardTeam({ image, name, title }) {
  return (
    <div className="relative overflow-hidden hover:shadow-md duration-300 group">
      <div className=" w-72 h-96 shadow-md flex flex-col justify-center items-center gap-y-8 bg-white ">
        <div className="w-[150px] h-[150px] bg-green-500 rounded-full z-50">
          <Image
            src={image}
            width={150}
            height={150}
            className="rounded-full group-hover:border-2 border-green-200 group-hover:scale-90 duration-300"
          />
        </div>
        <div className="flex flex-col justify-between items-center gap-y-2">
          <h1 className="text-xl uppercase">{name}</h1>
          <p>{title}</p>
        </div>
      </div>
      <div className="absolute bg-green-200 w-full h-32 rounded-b-full -top-3 grouhover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 "></div>
      <div className="absolute bg-green-500 h-12 w-72 opacity-0 group-hover:opacity-100 -bottom-20 group-hover:bottom-0 transition-all duration-300">
        <SocialIcon />
      </div>
    </div>
  );
}

export default CardTeam;
