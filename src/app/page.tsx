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
import { useRouter } from 'next/navigation';

function LandingSection({router}: {router: any}) {
  
  return (
    <section className="landing-section w-auto mt-8">
      <div className="flex gap-8 flex-wrap">
        <div className="w-[150px] h-[150px] -mt-8">
          <img
            src="/ProjectAssets/profile.jpg"
            alt="Halley Dao"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-sm text-neutral m-0">Data Analyst</p>
            <h1 className="text-2xl font-bold mb-1">Halley Dao</h1>
          </div>
          <div className="flex flex-row gap-3 flex-wrap">
            <button
              onClick={() => router.push("/ProjectAssets/Halley_Dao_CV_DA.pdf")}
              className="btn btn-neutral text-neutral-content"
            >
              Resume <DownloadIcon />
            </button>
            <a href="https://github.com/halleyd2804" className="btn btn-soft">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/halley-dao" className="btn btn-soft">
              <FaLinkedin />
            </a>
            <a href="mailto:halleydao2004@gmail.com" className="btn btn-soft">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  
  
}




function Experience() {
  return (
      <section className={"my-1 prose prose-headings:mt-1"}>
        <h1>Experience</h1>
        <ul className={"timeline timeline-vertical timeline-compact gap-1 pl-0"}>
          <li>
            <div className="timeline-end timeline-box experience-content">
              <h3>
                <b>Walter and Eliza Hall Institute of Medical Research - Data Engineer Intern</b>
              </h3>
              <p><b>Jul, 2024 - Oct, 2024</b></p>
              <ul>
                <li>
                Optimized website performance by implementing in-memory caching, improving loading times and reducing crashes, while utilizing Nectar Cloud for deploying and running R-based data analysis and machine learning models on large datasets to enhance computational efficiency and reduce processing time
                </li>
                <li>
                Transformed data files from H5 format to RDS format for enhanced compatibility and streamlined direct data retrieval in R, increasing efficiency in data processing and boosting website speed by 20%, while reducing reliance on Python data transfersefficiency
                </li>
                <li>
                Leveraged Excel and SharePoint for effective collaboration, team communication, ensuring accurate data presentations and improving workflow integration
                </li>

              </ul>
            </div>
          </li>
          <li>
            <div className="timeline-end timeline-box experience-content">
              <h3>
                <b>Viettel Digital - Data Analyst Intern</b>
              </h3>
              <p><b>Jul, 2023 - Jul, 2023</b></p>
              <ul>
                <li>
                Utilized Tableau (including Level of Detail (LOD) expressions, calculation fields, table calculations, parameters, and data blending) to design interactive, dynamic visualisations
                </li>
                <li>
                Cleaned and pre-processed over 100,000 data records using Excel to ensure accuracy and consistency, streamlining analysis and improving overall quality of visualisations and insights
                </li>
              </ul>
            </div>
          </li>
          <li>

            <div className="timeline-end timeline-box experience-content">
              <h3>
                <b>Digimaker - Technology Mentor</b>
              </h3>
              <p><b>Aug, 2023 - Jun, 2024</b></p>
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
      <div className="project-content grid grid-cols-1 md:grid-cols-2 gap-8">
        {Projects.map((project) => (
          <Link
            href={`/projects/#${project.id}`}
            className="no-underline card bg-base-100 w-82 max-w-full shadow-sm card-border prose prose-headings:my-3"
            key={project.id}
          >
            <Carousel className="w-full p-0 m-0">
              <CarouselContent>
                {project.thumbnail.map((media, index) => (
                  <CarouselItem className="w-full" key={media} id={(project.id + index).toString()}>
                    {media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg') ? (
                      <video
                        className="rounded-xl mt-0 mb-0 object-cover object-top h-[150px] w-full"
                        controls
                      >
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={media}
                        alt="Thumbnail"
                        className="rounded-xl mt-0 mb-0 object-cover object-top h-[150px]"
                        width={400}
                        height={200}
                      />
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>

              {project.thumbnail.length > 1 && <CarouselPrevious />}
              {project.thumbnail.length > 1 && <CarouselNext />}
            </Carousel>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-center">
                {project.technologies.map((technology) => (
                  <div className="badge badge-outline" key={project.name + technology}>
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <section className="f">
      <h1>Featured Projects</h1>
      {renderProjects()}
    </section>
  );
}

  function Education() {
    return (
        <section className={"prose prose-headings:my-3"}>
      <h1>Education</h1>
      <h3>The University of Melbourne</h3>
      <p>Bachelor of Science - Major in Computing and Software Systems</p>
      <ul className={""}>
        <li>
          Relevant Coursework: Probability for Statistics, Statistics, Elements of Data Processing, Econometrics 1/2, Foundation of Fintech, Machine Learning, Artificial Intelligence
        </li>
        <li>Achievements: Melbourne International Undergraduate Scholarship</li>
      </ul>
    </section>)
  }

  function Skills(){
    return (
      <section className={"prose prose-headings:my-3"}>
      <h1>Technical Skills</h1>
      <ul className="text-base text-base-content opacity-100">
    <li>
      <span className="font-semibold "> Programming & Development:</span><br />
      Python(NumPy, Pandas, Matplotlib, Scikit-learn, statsmodels, NLTK, Beautiful Soup, regex), 
      R, JavaScript, HTML, CSS, SQL, Jupyter Notebook, VSCode, RStudio, Nectar
    </li>

    <li>
      <span className="font-semibold"> Data Science & Databases:</span><br />
      Machine Learning, Data Modelling, Data Mining, Querying, EDA, 
      Excel (Cleaning, Analysis, Viz), Tableau, Power BI, MySQL, PostgreSQL, MongoDB, 
      NLP (Prompt Engineering, Normalization, Info Extraction), Canva
    </li>

    <li>
      <span className="font-semibold">🤝 Collaboration & Tools:</span><br />
      Agile (Jira, Confluence), SharePoint, Project Management, Documentation, Version Control (Git, GitHub)
    </li>
  </ul>
    </section>
    )
  }

export default function Home() {
  const router = useRouter()
  return (

        <main className="flex min-h-screen flex-col justify-between md:mx-5 mx-10 prose">
          <LandingSection router={router}/>
          <div className="divider"></div>
          <Education></Education>
          <div className={"divider"}/>
          <Experience/>
          <div className="divider"></div>
          <ProjectOverview/>
          <div className="divider"></div>
          <Skills/>
        </main>

  );
}
