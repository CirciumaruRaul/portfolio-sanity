import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";

export default function Home() {
  return (
    <div className=' text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Header />

      <section id = "hero" className='snap-start'>
      <Hero />
      </section>

      <section id = "about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>

      <section id="skills" className="snap-center">
        <Skills/>
      </section>

      <section id="projects" className="snap-center">
        <Projects/> 
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}
