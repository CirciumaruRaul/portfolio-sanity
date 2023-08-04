import { createClient, groq } from "next-sanity";
import { Project, About, Experience, typeSkills } from "../types/project";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        nume,
        "image": image.asset->url,
        descriere
    }`
  );
}

export async function getAbout(): Promise<About[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"]{
      _id,
      _createdAt,
      "imagine": imagine.asset->url,
      descriere
  }`
  );
}

export async function getSkills(): Promise<typeSkills[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skills"]{
      _id,
      procent,
      'image':image.asset->url
    }`    
  )
}

export async function getExperience(): Promise<Experience[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"]{
      _id,
      titulatura,
      firma,
      'image':image.asset->url,
      'tech':tech[].asset->url,
      dataE,
      dataS,
      points
    }`
  );
}
