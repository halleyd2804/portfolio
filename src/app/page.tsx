import Image from "next/image";
import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";


function LandingSection() {
  return (
    <section className="landing-section bg-white text-black lg:p-8 w-auto p-8">
      <div className="intro text-center flex items-center flex-col">
        <h1 className="text-4xl font-bold mb-4">{"I'm Steven Bui"}</h1>
        <p className="mb-8">I am a 3rd year student @ The University of Melbourne, a full-stack web developer. I am also a low-level programming, AI Enthusiast</p>
        <div className="quick-links grid md:flex justify-center md:auto-cols-max md:w-full grid-flow-row w-4/5">
          <a href="/path/to/resume.pdf" download className="btn bg-blue-500 text-white py-2 px-4 rounded-full flex justify-center gap-2 items-center w-full md:w-auto m-2 md:m-4">
            <FaFileDownload className="" /> Download Resume
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="btn w-full md:w-auto bg-blue-700 text-white py-2 px-4 m-2 md:m-4 rounded-full flex justify-center gap-2 items-center">
            <FaLinkedin className="" /> LinkedIn
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="btn w-full md:w-auto bg-gray-800 text-white py-2 px-4 m-2 md:m-4 rounded-full flex justify-center gap-2 items-center">
            <FaGithub className="" /> GitHub
          </a>
          <a href="mailto:your-email@example.com" className="btn bg-red-500 md:w-auto text-white py-2 px-4 m-2 md:m-4 rounded-full flex justify-center gap-2 items-center w-full">
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
      title: "Books Store Collaborative Recommender System",
      image: "https://booknet.com.au/wp-content/uploads/2020/05/5-Advantages-of-an-Online-Bookshop.jpg",
      description: "A recommendation system using Collaborative Filtering with Matrix Factorization.",
      technologies: ["Python", "Pandas", "Scikit-Learn"],
      link: "/projects/1"
    },
    {
      title: "Meetix – A Friend-Making Website Through Events ",
      image: "/ProjectAssets/MeetixLandingPage.png",
      description: "A platform for event ticketing and attendee matchmaking powered by AI",
      technologies: ["NextJS", "React", "Firebase"],
      link: "/projects/2"
    },
    {
      title: "Medical Pantry - Image Recognizer & Inventory Manager for Medical Products",
      image: "/ProjectAssets/MedicalPantry.png",
      description: "A mobile webapp to manage medical supplies and recognize products using image recognition",
      technologies: ["NextJS", "React", "Firebase"],
      link: "/projects/3"
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
            <Card key={index} className="bg-white rounded-lg shadow-lg overflow-hidden md:m-4 m-4 transform transition duration-500 hover:scale-105">
              <CardHeader>
                
              <Image src={project.image} alt={project.title} width={100} height={100} className="w-full h-48 object-cover" />
              </CardHeader>
              
              <CardContent className="w-full">
                
                <CardTitle className="mt-4 text-xl w-full">{project.title}</CardTitle>
                <CardDescription className="w-full">{project.description}</CardDescription>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row justify-center gap-2 my-4">
                      {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit">{tech}</span>
                    ))}
                  </div>
                  
                  
                </div>
                <CardFooter className="flex justify-center w-full">
                  <a href={project.link} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Learn More</a>
                </CardFooter>
              </CardContent>
            </Card>
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
