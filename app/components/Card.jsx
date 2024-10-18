import React from "react";

const Card = ({ ico, title, texte }) => {
  return (
    <div className="group hover:-translate-y-3 shadow-md hover:shadow-xl duration-300 bg-white">
      <div className=" flex flex-col justify-center items-center space-y-8 px-8 py-8">
        <div className="w-20 h-20 rounded-full border-2 border-gray-400 group-hover:border-green-400 flex justify-center items-center ">
          {ico}
        </div>
        <h2 className="text-xl font-light uppercase tracking-wider ">
          {title}
        </h2>
        <p className="text-gray-600">{texte}</p>
      </div>
    </div>
  );
};

export default Card;
