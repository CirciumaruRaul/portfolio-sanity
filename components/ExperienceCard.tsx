import React from "react";
import { Experience } from "../types/project";


const ExperienceCard = (props: Experience) => {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center max-[500px]:h-28">
        <img className="rounded-full" src={props.image} alt="eu" />
      </div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light mt-1">{props.titulatura}</h4>
        <p className="font-bold text-2xl">{props.firma}</p>
        <div className="flex space-x-2 my-2">
          {props.tech.map((tech, i) => (
            <li className="list-none h-20 w-20 " key={i}>
              <img className="rounded-full" src={tech} alt={tech} />
            </li>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {props.dataS} - {props.dataE}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {props.points.map((point, i) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
