"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { defaultAnimation } from "../../../app/utils/animation";

type OurServices = {
  name: string;
  desc: string;
};

export const ourServices: OurServices[] = [
  {
    name: "UI/UX Design",
    desc: "We create captivating interfaces that enhance digital experiences, combining artistic creativity with user-centric principles.",
  },
  {
    name: "Web Development",
    desc: "Creating websites that are both durable and adaptable, ensuring flawless functionality on various screens and devices for a seamless user experience.",
  },
  {
    name: "Mobile App Development",
    desc: "Developing user-friendly, feature-packed mobile applications designed to captivate and retain user interest effectively and efficiently.",
  },
  {
    name: "Digital Marketing",
    desc: "Driving brand awareness and growth through tailored digital marketing strategies.",
  },
  {
    name: "Branding Services",
    desc: "Our proficiency in branding empowers businesses to forge a robust identity, encompassing distinctive logos and compelling messaging that deeply resonates with their intended audience.",
  },
  {
    name: "SAAS",
    desc: "We provide scalable and secure cloud-based solutions, empowering businesses to thrive in the digital landscape.",
  },
  {
    name: "Development",
    desc: "From conceptualization to execution, our agile methodology yields tailor-made software solutions that catalyze business expansion, characterized by meticulous attention to detail and an unwavering focus on user experience.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="mx-auto mt-[1.5rem] max-w-[77.5rem] px-[1.5rem] py-[2rem] md:mt-[0.5rem] md:py-[3.75rem]"
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: "-240px",
      }}
    >
      <div className="flex flex-col items-start gap-[2rem] md:flex-row md:items-center md:justify-between md:gap-[1.5rem]">
        <div className="flex flex-1 flex-col gap-[1rem] md:gap-[1.5rem]">
          <h2 className="text-h2">
            We Create meaningful digital solutions that level up your business
          </h2>
          <p className="text-sm max-w-[39.38rem] text-black-70">
            Elevating businesses with expertly designed and executed digital
            strategies. Designers Clan is here to help you conquer the online
            space one pixel at a time.
          </p>
          <Link href={"/contact"}>
            <button className="btn-blue"> Request a quote</button>
          </Link>
        </div>
      </div>

      {/* services list */}
      <hr className="mt-[3.5rem] border-black-10" />
      {ourServices.map((service) => (
        <div
          key={service.name}
          className="group border-b border-black-10 px-[1.5rem] py-[1.5rem] transition-all hover:bg-black-10 md:flex md:items-center md:justify-between md:px-[2rem] md:py-[2rem]"
        >
          <div className="m:gap-[1.5rem] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between">
              <h3 className="text-h3">{service.name}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-[3rem] w-[3rem] p-[0.5rem] group-hover:bg-blue-100 group-hover:stroke-white md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
            <p className="text-sm max-w-[32.63rem] text-black-70">
              {service.desc}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-[6.25rem] w-[6.25rem] p-[1.5rem] group-hover:bg-blue-100 group-hover:stroke-white md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      ))}
    </motion.section>
  );
}
