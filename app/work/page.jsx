"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "project 1",
    description:
      "This is a full-stack e-commerce platform built with React, Next.js, Prisma, MongoDB, Firebase, and NextAuth. It offers a comprehensive shopping experience, including features like a shopping cart, order management, product ratings and Google authentication. The platform also includes a robust admin dashboard, Stripe integration for payments and detailed shop analytics.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Nextjs",
      },
      {
        name: "Recharts",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Stripe",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Firebase",
      },
    ],

    image: "/assets/work/eshop1.png",
    live: "https://eshop-next-delta.vercel.app/",
    github: "https://github.com/miladkhoshakhklagh/eshop-next",
  },

  {
    num: "02",
    category: "Tourism Front-End Platform",
    title: "Tourism Front-End Platform",
    description:
      "A front-end tourism website built with React, Next.js, and CSS, offering a modern, interactive user experience. The platform includes multiple sections and a customizable theme, with a responsive design that ensures seamless navigation across devices—ideal for travel enthusiasts.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Nextjs",
      },
      {
        name: "Css",
      },
      {
        name: "Swiper",
      },
      {
        name: "Responsive",
      },
    ],

    image: "/assets/work/WegTraum.jpeg",
    live: "https://travel-nextjs-inky.vercel.app/",
    github: "https://github.com/miladkhoshakhklagh/travel-nextjs",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      // lg:-m-6  lg:-m-6  lg:-m-6  lg:-m-6  lg:-m-6  lg:-m-6  lg:-m-6
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/*  mr-4 mr-4 mr-4 mr-4 mr-4 mr-4 mr-4 mr-4 mr-4 mr-4  */}
            <div className="flex flex-col gap-[30px] mr-4">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description  */}
              <p className="text-white/60 text-center xl:text-justify">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-3 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent text-sm">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    {/* mt-3 bg-primary   mt-3 bg-primary    mt-3 bg-primary    mt-3 bg-primary   mt-3 bg-primary  */}
                    <div className="h-[460px] mt-3 relative group flex justify-center items-center bg-primary">
                      {/* ovelay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none xl:mr-8"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all
                "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
