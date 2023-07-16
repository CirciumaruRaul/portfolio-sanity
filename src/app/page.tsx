"use client"

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import pabout from "../../assets/about.jpg";
import pexperience from "../../assets/experience.jpg";
import ptoobad from "../../assets/toobad.png";
import nextjs from"../../assets/nextjs.png";
import javascript from "../../assets/javascript.png";
import tailwind from "../../assets/tailwindcss.jpg";
import phtml from "../../assets/html.png";
import react from "../../assets/react.png";
import ptypescript from "../../assets/typescript.svg";
import css from "../../assets/css.png";
import oop from "../../assets/oopcover.png";
import cpp from "../../assets/cpp.png";
import sql from "../../assets/sql.png";
import python from "../../assets/pythin.png";
import node from "../../assets/nodejs.png";
import AntEvt from "../../assets/AntEvt.png";
import LogReg from "../../assets/LoginRegAPI.png";
import Db from "../../assets/Bd.png";


// about info
const about = {poza:pabout, descrierea:"I'm currently a second year student at the University of Bucharest, attending courses at the Faculty of Mathematics and Informatics. I like to see results and I pay attention to the details after the main part is done. I like to prioritize the important parts first and the details after. "}

// experience info
const workExperience = [{img:pexperience, titulatura: "Not Found", firma:"NONE", tech:[ptoobad,ptoobad,ptoobad], points:["Didn't had the oportunity yet", "I will do my absolut best to be perfect"], dataS:"11/06/2002", dataE:"present"}]

// skill info
const skills = [
  {procent: 60, poza:nextjs},
  {procent: 75, poza:javascript},
  {procent: 75, poza:tailwind},
  {procent: 100, poza:phtml},
  {procent: 65, poza:react},
  {procent: 65, poza:ptypescript},
  {procent: 100, poza:css},
  {procent: 90, poza:cpp},
  {procent: 90, poza:sql},
  {procent: 85, poza:python},
  {procent: 80, poza:node},
];

// projects info
const projects = [
  {img:oop, nume:"OOP", descriere:"This project is an application that manages the orders from a store and the changes are made in realtime to the list of items for order. Made with concepts like: polymorphism, inheritance, virtualization, interface, singleton menu, template classes and functions."},
  {img:AntEvt, nume:"Prezentation website", descriere:"A simple presentation website using HTML, CSS and JAVASCRIPT. The javascript in this particular project is not the focus. The main point of this project for me were the looks of it."},
  {img:LogReg, nume:"Node API-CRUD with LoginRegister", descriere:"A project with a bit of styling that has the following: DOM-operation, mouse and keyboard events, AJAX for CRUD API and nodejs for the backend routes."},
  {img:Db, nume:"Relational-Database", descriere:"This database is made using 'DatabaseXE' from Oracle. It models a Uber like company. That has information about clients, employees that interacted with a specific client, their job, department and so on."}
]


export default function Home() {
  return (
    <div className=' text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Header />

      <section id = "hero" className='snap-start'>
      <Hero />
      </section>

      <section id = "about" className="snap-center">
        <About about={about}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience workExperience={workExperience}/> {/* DONE DOAR DE AGAUGAT DATE VALIDE */}
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills}/> {/* DONE DOAR DE AGAUGAT DATE VALIDE */}
      </section>

      <section id="projects" className="snap-center">
        <Projects projects ={projects}/> {/* DONE DOAR DE AGAUGAT DATE VALIDE */}
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}
