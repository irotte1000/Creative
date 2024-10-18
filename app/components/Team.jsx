import React from "react";
import CardTeam from "./CardTeam";

function Team() {
  return (
    <section className="bg-[#f9f9f9] h-[550px] py-10">
      <div className="container mx-auto">
        <h1 className="text-2xl uppercase tracking-widest mb-5">
          our <span className="text-green-500 font-bold">team</span>
        </h1>
        <div className="flex justify-between items-center gap-x-4">
          <CardTeam
            image="/images/img-1.jpg"
            name="ettori"
            title="web developper"
          />
          <CardTeam
            image="/images/img-2.jpg"
            name="ettori"
            title="web developper"
          />
          <CardTeam
            image="/images/img-3.jpg"
            name="ettori"
            title="web developper"
          />
          <CardTeam
            image="/images/img-4.jpg"
            name="ettori"
            title="web developper"
          />
        </div>
      </div>
    </section>
  );
}

export default Team;
