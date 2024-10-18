import React from "react";
import PortfolioSlider from "./PortfolioSlider";

const Portfolio = () => {
  return (
    <section id="portfolio" className="h-[550px] py-8 bg-white">
      <div className="container mx-auto">
        <h1 className="text-2xl uppercase tracking-widest">
          our <span className="text-green-500 font-bold">portfolio</span>
        </h1>
      </div>
      <PortfolioSlider />
    </section>
  );
};

export default Portfolio;
