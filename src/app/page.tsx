"use client"
import Image from 'next/image';
import React, {useEffect} from 'react';
import {FaEnvelope, FaFileDownload, FaGithub, FaLinkedin} from 'react-icons/fa';
import {DownloadIcon} from "lucide-react";
import {Projects} from "@/app/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import {ThemeProvider} from "@/context/ThemeContext";

function LandingSection() {
  return (
      <section className="landing-section w-auto mt-8">
        <div className="mx-1 prose">
          <desc>Software Engineer</desc>
          <h1 className={"mb-3"}>Steven Bui</h1>
        </div>
        <div className="flex flex-row flex-start gap-3 w-full">
          <a href={"/ProjectAssets/DucBui_Resume.pdf"} className="btn btn-soft mx-1">Resume <DownloadIcon/></a>
          <a href={"https://github.com/buianhduc"} className="btn btn-soft mx-1"><FaGithub/></a>
          <a href={"https://www.linkedin.com/in/stevenbui4/"} className="btn btn-soft mx-1"><FaLinkedin/></a>
          <a href={"mailto://steven.bui0810@gmail.com"} className="btn btn-soft mx-1"><FaEnvelope/></a>
        </div>
      </section>
  );
}




function Experience() {
  return (
      <section className={"my-8 prose prose-headings:mt-3"}>
        <h1>Experience</h1>
        <ul className={"timeline timeline-vertical timeline-compact gap-10"}>
          <li>
            <div className="timeline-middle">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"/>
              </svg>
            </div>
            <div className="timeline-end timeline-box experience-content">
              <h3>
                <b>AndAI - AI Engineer</b>
              </h3>
              <p><b>Mar/2025 - Present</b></p>
              <ul>
                <li>
                  Fine-tuned AI models using Unsloth, improving model efficiency and inference speed by 40%, optimizing performance and accuracy
                </li>
                <li>
                  Designed and developed AI-driven automation tools, streamlining repetitive tasks and boosting operational efficiency
                </li>

              </ul>
            </div>
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"/>
              </svg>
            </div>
            <div className="timeline-end timeline-box experience-content">
              <h3>
                <b>Digimaker - Technology Mentor</b>
              </h3>
              <p><b>Feb, 2023 - Jan, 2025</b></p>
              <ul>
                <li>
                  Conducted weekly coding lectures to over 200 students across Melbourne, teaching 6 programming languages: Scratch, Small Basic, Python, JavaScript, C, and Java
                </li>
                <li>
                  Fostered a productive learning environment, increasing student engagement and satisfaction by 50% through tailored materials and interactive sessions
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>)
}

function ProjectOverview() {
  const renderProjects = () => {
    return (
        <div className={"project-content grid grid-cols-1 md:grid-cols-2 gap-8"}>
          {Projects.map((project) => (
              <Link  href={`/projects/#${project.id}`} className="no-underline card bg-base-100 w-82 max-w-full shadow-sm card-border prose prose-headings:my-3" key={project.id}>
                <Carousel className={"w-full p-0 m-0"}>
                  <CarouselContent>
                    {project.thumbnail.map((pic, index) => (
                        <CarouselItem className="w-full" key={pic} id={(project.id + index).toString()}>
                          <Image
                              src={pic}
                              alt="Thumbnail"
                              className="rounded-xl mt-0 mb-0 object-cover object-top h-[150px]"
                              width={400}
                              height={200}/>
                        </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.thumbnail.length > 1 && (
                      <CarouselPrevious/>

                  )

                  }
                  {project.thumbnail.length > 1 && (
                      <CarouselNext/>

                  )

                  }
                </Carousel>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{project.name}</h2>
                    <p>{project.description}</p>
                    <div className="card-actions justify-center">
                      {project.technologies.map((technology) => (
                          <div className="badge badge-outline"
                               key={project.name + project.technologies}>{technology}</div>
                      ))}

                    </div>
                  </div>
              </Link>

            ))
          }
        </div>
    )
  }
  return (
    <section className={"f"}>
      <h1>Featured Projects</h1>
      {renderProjects()}
    </section>
  )
  }

  function Education() {
    return (
        <section className={"prose prose-headings:my-3"}>
      <h1>Education</h1>
      <h3>The University of Melbourne</h3>
      <p>Bachelor of Science - Major in Computing and Software Systems</p>
      <ul className={""}>
        <li>
          Relevant Coursework: Algorithms and Data Structures, Object Oriented Software Development, Software Modelling and Design, Computer Systems, Machine Learning, Artificial Intelligence
        </li>
        <li>Achievements: Melbourne International Undergraduate Scholarship</li>
      </ul>
    </section>)
  }

export default function Home() {
  return (

        <main className="flex min-h-screen flex-col justify-between md:mx-5 mx-10 prose">
          <LandingSection/>
          <div className="divider"></div>
          <Education></Education>
          <div className={"divider"}/>
          <Experience/>
          <div className="divider"></div>
          <ProjectOverview/>
        </main>

  );
}
