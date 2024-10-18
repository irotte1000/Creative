"use client";
import React, { useRef } from "react";

const Video = ({ src }) => {
  return (
    <div className=" border shadow-2xl shadow-black rounded-md overflow-hidden w-[900px] h-[500px] drop-shadow-sm group">
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Video;
