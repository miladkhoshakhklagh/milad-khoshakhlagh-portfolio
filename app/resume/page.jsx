"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
// about data
const about = {
  title: "About me",
  description:
    "Passionate about design, dedicated to code, and always eager to learn. The following is a snapshot of my journey and skills I'm excited to connect and collaborate, creating something truly impactful together. Let's make more than just projects; let's build experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Milad",
    },
    {
      fieldName: "Experience",
      fieldValue: "9+ Years",
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Deutsch",
    },
    {
      fieldName: "Email",
      fieldValue: "Milad.khoshakhlaghostad@gmail.com",
    },
  ],
};

// experience data
const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Full-stack developer with over a year of experience, specializing in React and Next.js. With a strong curiosity and passion for learning new technologies, I am always eager to acquire new skills to continuously improve projects and deliver innovative solutions. My ability to learn quickly and adapt to emerging technologies allows me to solve problems more efficiently and produce higher quality code. This results in increased team productivity and reduced development costs. Committed to delivering high-quality solutions and collaborating in a friendly and dynamic environment.",
  items: [
    {
      company: "Baspar Payesh Pars Co.",
      position: "C# Windows Application Developer",
      duration: "2016 - 2022",
    },
    {
      company: "Haghani Jewelry",
      position: "WordPress Developer",
      duration: "part time",
    },
    {
      company: "Shahsavand Co.",
      position: "Senior SQL Database Administrator",
      duration: "2022 - 2023",
    },
    {
      company: "Freelancer",
      position: "Full-stack web developer",
      duration: "2023 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am a dedicated computer science graduate with a strong foundation in software and hardware development. I am eager to leverage my technical skills to contribute to innovative projects and explore emerging technologies.",
  items: [
    {
      // University: "Azad University of Quchan",
      Degree: "Associate in Computer Software Engineering",
      duration: "2006 - 2009",
    },
    {
      // University: "Hircania University of Bandar- e Gaz",
      Degree: "Bachelor of Computer Hardware Engineering",
      duration: "2010 - 2013",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "My core expertise lies in front-end development, where I have a solid grasp of technologies such as HTML, CSS3, Tailwind , Bootstrap , JavaScript,Typescript React, Nextjs, and Node.js. However, my skill set extends beyond the front-end, as I have a working knowledge of back-end development processes, allowing me to contribute effectively to full-stack projects",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "netx.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      // min-h-[80vh]  min-h-[80vh]   min-h-[80vh]    min-h-[80vh]    min-h-[80vh]    min-h-[80vh]   min-h-[80vh]
      className="min-h-[50vh] flex justify-center items-center py-12 xl:py-0	"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-center xl:text-justify  max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[7px] h-[7px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-center xl:text-justify max-w-[600px] mx-auto text-white/60 xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start mt-4">
                            {item.Degree}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-center xl:text-justify text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2' sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="font-bold text-4xl">{about.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0 text-center xl:text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-base break-all">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
