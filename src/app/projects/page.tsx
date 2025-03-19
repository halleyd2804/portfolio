'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';

import {useRouter} from "next/navigation";
import {Projects} from "@/app/data";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {FaGithub, FaGlobe} from "react-icons/fa";

interface IModalProps {
  project: IProjectCardProps;
  children?: React.ReactNode;
}

const Modal = ({project, children}: IModalProps) => {
  return (
      <Dialog>
        <DialogTrigger>
          <ProjectCard {...project} />
        </DialogTrigger>
        <DialogContent className={''}>{children}</DialogContent>
      </Dialog>
  );
};

interface IProjectCardProps {
  image: string[];
  title: string;
  description: string;
  achievements: string[]
  technologies: string[],
  links: {
    link: string,
    source: "Github" | "Website" | "Devpost"
  }[],
}

const DevpostLogo =() => {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="currentColor"
          d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853Z"/>
  </svg>)
};
const ProjectCard = ({image, title, description, achievements, technologies, links}: IProjectCardProps) => {

  return (
      <div className="card bg-base-100 shadow-sm card-border mb-8">
        <Carousel className={"w-full flex items-center justify-center"}>
          <CarouselContent className={"w-full p-0 m-0"}>

            {image.map((pic, index) => (
                <CarouselItem className="w-full flex justify-center items-center m-0 p-0" key={pic} id={(index).toString()}>
                  <Image
                      src={pic}
                      alt="Thumbnail"
                      className="rounded-xl w-full h-full"

                      width={400}
                  height={200}
                  quality={80}/>
                </CarouselItem>
            ))}
          </CarouselContent>
          {image.length > 1 && (
              <CarouselPrevious/>

          )

          }
          {image.length > 1 && (
              <CarouselNext/>

          )

          }
        </Carousel>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <ul>
            {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
            ))}
          </ul>
          <div className="flex justify-center gap-2">
            {technologies.map((technology) => (
                <div className="badge badge-outline"
                     key={title + technology}>{technology}</div>
            ))}
          </div>

          <div className="card-actions justify-center mt-2">
            {links.map((link, index) => (
                <a href={link.link} className={"btn no-underline"} key={link.link}>
                  {link.source == "Github" && <FaGithub />}
                  {link.source == "Devpost" &&
                      <DevpostLogo/>}
                  {link.source == "Website" && <FaGlobe/>}
                  {link.source}
                </a>
            ))}

          </div>
        </div>
      </div>
  );
};


const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

  };
  const router = useRouter();
  const handleRouteTo = (url: string) => {
    router.push(url);
  }
  return (
      <div className="p-4 prose prose-ul:my-0 prose-p:mb-0 prose-headings:my-0 flex flex-col justify-center w-full">
        <h1 className="font-bold mb-4 text-center">Featured Project</h1>

        <div className="mt-5">
          {Projects.map((project, index) =>
              <ProjectCard title={project.name} achievements={project.achievements} technologies={project.technologies} description={project.description} image={project.thumbnail} links={project.links} key={index} />)
            }
        </div>
      </div>
  );
};

export default ProjectsPage;
