'use client';
import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {DiGithubBadge} from 'react-icons/di';
import {FaGlobe} from "react-icons/fa";

import {useRouter} from "next/navigation";

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
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({image, title, description, technologies}: IProjectCardProps) => {

  return (
      <Card
          className="bg-nav-primary border-none text-center rounded-lg shadow-lg overflow-hidden md:m-4 m-4 transform transition duration-500 hover:scale-105">
        <CardHeader>
          <Image src={image} alt={title} width={100} height={100} className="w-full h-48 object-cover"/>
        </CardHeader>

        <CardContent className="w-full">
          <CardTitle className="mt-4 text-xl w-full">{title}</CardTitle>
          <CardDescription className="w-full">{description}</CardDescription>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center gap-2 my-4">
              {technologies.map((tech, index) => (
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
  const projectsData = [
        {
          title: 'Books Store Collaborative Recommender System',
          image: 'https://booknet.com.au/wp-content/uploads/2020/05/5-Advantages-of-an-Online-Bookshop.jpg',
          description: 'A recommendation system using Collaborative Filtering with Matrix Factorization.',
          technologies: ['Python', 'Pandas', 'Scikit-Learn'],
          link: '/projects/1',
          detailedDescription: (
              <div>
                <div className="flex justify-center items-center">
                  <Button className={`flex justify-center items-center gap-1 bg-nav-primary text-black dark:text-white hover:text-white dark:hover:text-black`}
                          onClick={() => {handleRouteTo('https://github.com/buianhduc/Book-store-recommender-system')}}>
                    <DiGithubBadge className={'text-inherit'}/>
                    <span className={'text-inherit'}>Access GitHub</span>
                  </Button>
                </div>
                <ul className="detailedDescription flex flex-col justify-center gap-2 mx-auto">
                  <li>Developed a recommendation system using Collaborative Filtering with Matrix Factorization.</li>
                  <li>
                    Utilized SciKit, Pandas, and Python for data cleaning and visualization, achieving a 75% accuracy rate.
                  </li>
                </ul>
              </div>
          ),
        },
        {
          title: 'Meetix – A Friend-Making Website Through Events ',
          image: '/ProjectAssets/MeetixLandingPage.png',
          description: 'A platform for event ticketing and attendee matchmaking powered by AI',
          technologies: ['NextJS', 'React', 'Firebase'],
          link: '/projects/2',
          detailedDescription: (
              <div>
                <div className="quicklinks flex w-full items-center gap-2 justify-center">
                  <Button className={`flex justify-center items-center gap-1 bg-nav-primary text-black dark:text-white hover:text-white dark:hover:text-black`}
                  onClick={() => {handleRouteTo("https://github.com/edwnl/founders-hack-2024")}}>
                    <DiGithubBadge className={'text-inherit'}/>
                    <span className={'text-inherit'}>Access GitHub</span>
                  </Button>
                  <Button className={`flex justify-center items-center gap-1 bg-nav-primary text-black dark:text-white hover:text-white dark:hover:text-black`}
                  onClick={() => {handleRouteTo("founders-hack-2024.vercel.app")}}>
                    <FaGlobe className={'text-inherit'}/>
                    <span className={'text-inherit'}>Access Production Webpage</span>
                  </Button>
                </div>

                <ul className="detailedDescription flex flex-col justify-center gap-2 mx-auto list-disc">
                  <li>
                    {' '}
                    Built a platform for event ticketing and attendee matchmaking using Firebase Firestore for real-time data
                    management.
                  </li>
                  <li>
                    {' '}
                    Implemented a matchmaking algorithm and integrated real-time messaging to connect users with similar
                    interests.
                  </li>
                  <li>
                    {' '}
                    Developed a responsive, user-friendly interface with Next.js, React, and TailwindCSS for a seamless user
                    experience.
                  </li>
                </ul>
              </div>
          ),
        },
        {
          title: 'Medical Pantry - Image Recognizer & Inventory Manager for Medical Products',
          image: '/ProjectAssets/MedicalPantry.png',
          description: 'A mobile webapp to manage medical supplies and recognize products using image recognition',
          technologies: ['NextJS', 'React', 'Firebase'],
          link: '/projects/3',
          detailedDescription: (
              <div>
                <div className="quicklinks flex w-full items-center gap-2 justify-center">
                  <Button className={`flex justify-center items-center gap-1 bg-nav-primary text-black dark:text-white hover:text-white dark:hover:text-black`}
                  onClick={() => {handleRouteTo("https://github.com/buianhduc/medicalPantry")}}>
                    <DiGithubBadge className={'text-inherit'}/>
                    <span className={'text-inherit'}>Access GitHub</span>
                  </Button>
                </div>


                <ul className="detailedDescription flex flex-col justify-center gap-2 mx-auto list-disc">
                  <li> Managed the project using the AGILE methodology, increasing productivity by 75%.</li>
                  <li> Built a responsive interface with Next.js, React, and TailwindCSS.</li>
                  <li> Integrated OpenAI API for image recognition, achieving 80% accuracy in categorizing medical products.
                  </li>
                  <li> Utilized Firebase Firestore for efficient NoSQL data management and scaling</li>
                </ul>
              </div>
          ),
        },
      ]
  ;
  return (
      <div className="p-4 h-screen">
        <h1 className="text-5xl font-bold mb-4 text-center">My Projects</h1>
        {/*<div className="flex flex-col md:flex-row md:items-center md:justify-between m-4 gap-4">*/}
        {/*  <Input*/}
        {/*    type="text"*/}
        {/*    placeholder="Search projects..."*/}
        {/*    value={searchTerm}*/}
        {/*    onChange={handleSearchChange}*/}
        {/*    className="mb-2 md:mb-0 bg-nav-primary"*/}
        {/*  />*/}
        {/*  <Select>*/}
        {/*    <SelectTrigger className="w-[180px] bg-nav-primary" >*/}
        {/*      <SelectValue  placeholder="Category..." />*/}
        {/*    </SelectTrigger>*/}
        {/*    <SelectContent>*/}
        {/*      <SelectItem value="All categories">All Categories</SelectItem>*/}
        {/*      <SelectItem value="Web Development">Web Development</SelectItem>*/}
        {/*      <SelectItem value="Mobile Development">Mobile Development</SelectItem>*/}
        {/*      <SelectItem value="Data Science">Data Science</SelectItem>*/}
        {/*    </SelectContent>*/}
        {/*  </Select>*/}
        {/*</div>*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.map((project, index) => (
              <Modal project={project} key={index}>
                {project.detailedDescription}
              </Modal>
          ))}
        </div>
      </div>
  );
};

export default ProjectsPage;
