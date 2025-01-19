import Image from "next/image";
import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";


function LandingSection() {
  return (
    <section className="landing-section bg-white text-black lg:p-8 w-auto p-8">
      <div className="intro text-center flex items-center flex-col">
        <h1 className="text-4xl font-bold mb-4">{"I'm Steven Bui"}</h1>
        <p className="mb-8">Welcome to my portfolio. Connect with me through the links below.</p>
        <div className="quick-links grid justify-center auto-cols-max md:w-full grid-flow-row w-4/5">
          <a href="/path/to/resume.pdf" download className="btn bg-blue-500 text-white py-2 px-4 rounded-full flex justify-center gap-2 items-center w-full m-2 md:m-4">
            <FaFileDownload className="" /> Download Resume
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="btn w-full bg-blue-700 text-white py-2 px-4 m-2 md:m-4 rounded-full flex justify-center gap-2 items-center">
            <FaLinkedin className="" /> LinkedIn
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="btn w-full bg-gray-800 text-white py-2 px-4 m-2 md:m-4 rounded-full flex justify-center gap-2 items-center">
            <FaGithub className="" /> GitHub
          </a>
          <a href="mailto:your-email@example.com" className="btn bg-red-500 text-white py-2 px-4 m-2 md:m-4 rounded-full flex justify-center gap-2 items-center w-full">
            <FaEnvelope className="" /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectSection(props: any) {
  const projects = [
    {
      title: "Project 1",
      image: "/path/to/image1.jpg",
      description: "Description of project 1.",
      technologies: ["React", "TailwindCSS", "Node.js"],
      link: "/projects/project-1"
    },
    {
      title: "Project 2",
      image: "/path/to/image2.jpg",
      description: "Description of project 2.",
      technologies: ["Vue", "Vuetify", "Firebase"],
      link: "/projects/project-2"
    },
    {
      title: "Project 3",
      image: "/path/to/image3.jpg",
      description: "Description of project 3.",
      technologies: ["Angular", "Bootstrap", "Express"],
      link: "/projects/project-3"
    }
  ];

  return (
    <section className="project-section bg-gray-100 py-12 h-100vh">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-16">
          <a href="/projects" className="hover:underline">Have a look at my projects</a>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden md:m-4 m-4 transform transition duration-500 hover:scale-105">
              <Image src={project.image} alt={project.title} width={100} height={100} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay in Touch</h2>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-2 mb-4 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}
export default function Home() {
  // @ts-ignore
  return (
    <main className="flex min-h-screen flex-col justify-between">
      
      <LandingSection/>
      <ProjectSection/>
      <Footer/>
    </main>
  );
}
