import React from "react";
import { AiFillStar, AiOutlineCoffee, AiOutlineHistory } from "react-icons/ai";
import Card from "./Card";

const Work = () => {
  return (
    <section id="about" className="bg-[#f9f9f9] h-[400px]">
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center space-x-8">
          <Card
            ico={<AiFillStar size={25} />}
            title="responsive design"
            texte="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore."
          />
          <Card
            ico={<AiOutlineCoffee size={25} />}
            title="no coding required"
            texte="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore."
          />
          <Card
            ico={<AiOutlineHistory size={25} />}
            title="24/7 support"
            texte="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore."
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
