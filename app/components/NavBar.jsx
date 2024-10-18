import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="top-2 fixed w-full z-50">
      <div className="h-16 bg-[#97e6f0] rounded-md shadow-md container mx-auto">
        <div className="h-full flex justify-between items-center px-8 ">
          <div className="underline underline-offset-4">
            <Link href="#home">
              <Image
                src="/images/logo1.png"
                width={150}
                height={250}
                alt="logo"
              />
            </Link>
          </div>
          <nav>
            <ul className="flex gap-x-10">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#service">sevices</Link>
              </li>
              <Link href="#portfolio">Portfolio</Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
