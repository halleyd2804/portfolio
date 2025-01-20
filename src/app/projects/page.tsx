"use client";
import React, { useState } from "react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import "tailwindcss/tailwind.css";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

const Modal = () => {
  return (
    <div>hah</div>
  )
}
const projectsData = [
  {
    title: "Books Store Collaborative Recommender System",
    image:
      "https://booknet.com.au/wp-content/uploads/2020/05/5-Advantages-of-an-Online-Bookshop.jpg",
    description:
      "A recommendation system using Collaborative Filtering with Matrix Factorization.",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    link: "/projects/1",
  },
  {
    title: "Meetix – A Friend-Making Website Through Events ",
    image: "/ProjectAssets/MeetixLandingPage.png",
    description:
      "A platform for event ticketing and attendee matchmaking powered by AI",
    technologies: ["NextJS", "React", "Firebase"],
    link: "/projects/2",
  },
  {
    title:
      "Medical Pantry - Image Recognizer & Inventory Manager for Medical Products",
    image: "/ProjectAssets/MedicalPantry.png",
    description:
      "A mobile webapp to manage medical supplies and recognize products using image recognition",
    technologies: ["NextJS", "React", "Firebase"],
    link: "/projects/3",
  },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-4 bg-white h-screen">
      <h1 className="text-5xl font-bold mb-4 text-center">My Projects</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between m-4 gap-4">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-2 md:mb-0"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All categories">All Categories</SelectItem>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Mobile Development">
              Mobile Development
            </SelectItem>
            <SelectItem value="Data Science">Data Science</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            className="bg-white text-center rounded-lg shadow-lg overflow-hidden md:m-4 m-4 transform transition duration-500 hover:scale-105"
          >
            <CardHeader>
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="w-full h-48 object-cover"
              />
            </CardHeader>

            <CardContent className="w-full">
              <CardTitle className="mt-4 text-xl w-full">
                {project.title}
              </CardTitle>
              <CardDescription className="w-full">
                {project.description}
              </CardDescription>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-center gap-2 my-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded h-fit min-h-fit"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
