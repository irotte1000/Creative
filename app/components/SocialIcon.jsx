import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

function SocialIcon() {
  return (
    <div className="flex justify-center items-center gap-x-4 py-4 text-white">
      <FaFacebookF
        size={20}
        className="cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-200"
      />
      <FaTwitter
        size={20}
        className="cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-200"
      />
      <FaGooglePlusG
        size={25}
        className="cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-300 "
      />
      <FaLinkedinIn
        size={20}
        className="cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-300"
      />
    </div>
  );
}

export default SocialIcon;
