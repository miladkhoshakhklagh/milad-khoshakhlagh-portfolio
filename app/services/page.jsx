"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a professional front-end web developer specializing in designing and developing beautiful and efficient websites. With extensive experience, I have built a wide range of web applications, including corporate websites, e-commerce platforms and other complex projects.",
    href: "",
  },
  {
    num: "02",
    title: "Back-End Development",
    description:
      "In addition to front-end development, I am skilled in back-end technologies, including Node.js, Express, and RESTful API development. I design and implement scalable back-end systems that support front-end applications, ensuring seamless communication between client and server.",
    href: "",
  },
  {
    num: "03",
    title: "Component-Based Architecturet",
    description:
      "With expertise in React and Next.js, I focus on creating reusable, scalable components for modern web interfaces. This enables efficient development, maintenance, and future scalability of projects.",
    href: "",
  },
  {
    num: "04",
    title: "API Integration",
    description:
      "I have experience in integrating various APIs into React and Next.js applications, ensuring smooth data flow between front-end interfaces and back-end services, using tools like Axios and Fetch for asynchronous data fetching.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-x-20 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45"
                  >
                    {" "}
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */} {/* No className */}
                <p className="h-[80%] overflow-hidden text-center xl:text-justify text-[15px] text-white/60">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full "> </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
