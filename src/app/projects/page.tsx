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
  id: number,
  image: string[];
  title: string;
  description: string;
  achievements: string[]
  technologies: string[],
  links: {
    link: string,
    source: "Github" | "Tableau"
  }[],
}

const Tableau =() => {
  return (<img
    src="/ProjectAssets/tableau_logo.jpg"
    alt="Tableau Logo"
    style={{ width: '1.5em', height: '1.5em' }}
  />
  )
};
interface IProjectCardProps {
  id: string | number;
  image: string[]; // URLs (images or videos)
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  links: { source: string; link: string }[];
}

const ProjectCard = ({
  id,
  image,
  title,
  description,
  achievements,
  technologies,
  links,
}: IProjectCardProps) => {
  return (
    <div className="card bg-base-100 shadow-sm card-border mb-8" id={id.toString()}>
      <Carousel className="w-full flex items-center justify-center">
        <CarouselContent className="w-full p-0 m-0">
          {image.map((media, index) => (
            <CarouselItem
              className="w-full flex justify-center items-center m-0 p-0"
              key={`${id}-media-${index}`}
              id={`${index}`}
            >
              {media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg') ? (
                <video
                  className="rounded-xl w-full h-full object-cover"
                  controls
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={media}
                  alt="Thumbnail"
                  className="rounded-xl w-full h-full object-cover"
                  width={400}
                  height={200}
                  quality={80}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        {image.length > 1 && <CarouselPrevious />}
        {image.length > 1 && <CarouselNext />}
      </Carousel>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <ul className="list-disc list-inside my-2">
          {achievements.map((achievement) => (
            <li key={`${title}-achievement-${achievement}`}>{achievement}</li>
          ))}
        </ul>

        <div className="flex justify-center gap-2 w-full flex-wrap mt-2">
          {technologies.map((technology) => (
            <div className="badge badge-outline" key={`${title}-${technology}`}>
              {technology}
            </div>
          ))}
        </div>

        <div className="card-actions justify-center mt-4">
          {links.map((link) => (
            <a
              href={link.link}
              className="btn no-underline"
              key={`${title}-${link.source}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.source === 'Github' && <FaGithub />}
              {link.source === 'Tableau' && <Tableau />}
              <span className="ml-2">{link.source}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
      <div className="p-4 prose prose-ul:my-0 prose-p:mb-0 prose-headings:my-0 flex flex-col justify-center w-full">
        <h1 className="font-bold mb-4 text-center">Featured Project</h1>

        <div className="mt-5">
          {Projects.map((project, index) =>
              <ProjectCard id={project.id} title={project.name} achievements={project.achievements} technologies={project.technologies} description={project.description} image={project.thumbnail} links={project.links} key={index} />)
            }
        </div>
      </div>
  );
};

export default ProjectsPage;
