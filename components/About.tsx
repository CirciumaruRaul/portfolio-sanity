import React from "react";
import Image from "next/image";
import { getAbout } from "../sanity/sanity-utils";

async function About() {
  const about = await getAbout();
  return (
    <div
      key={about[0]._id}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div>
        <img
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[500px] max-[500px]:w-28 max-[500px]:h-28"
          src={about[0].imagine}
          alt={"eu"}
        />
      </div>

      <div className="space-y-10 px-0 md:px-10 flex flex-col w-[600px] max-[500px]:w-[350px]">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="text-lg text-[#CD7F32]">little</span>{" "}
          background
        </h4>
        <p className="text-base"> {about[0].descriere} </p>
      </div>
    </div>
  );
}

export default About;
