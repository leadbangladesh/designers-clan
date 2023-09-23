"use client";

import { defaultAnimation } from "@/src/app/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";

type CollaborateCompanies = {
  name: string;
  src: string;
};

const collaborateCompanies: CollaborateCompanies[] = [
  { name: "Company1", src: "/companies-logo/c1.jpg" },
  { name: "Company2", src: "/companies-logo/c2.jpg" },
  { name: "Company3", src: "/companies-logo/c3.png" },
  { name: "Company4", src: "/companies-logo/c4.jpg" },
  { name: "Company5", src: "/companies-logo/c5.jpg" },
];

export default function CompanyCollaboration() {
  return (
    <motion.section
      className="mx-auto mt-[2.56rem] flex max-w-[77.5rem] flex-col gap-[1.5rem] py-[2rem] md:mt-[0.5rem] md:gap-[3rem] md:py-[6.88rem]"
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: "-240px",
      }}
    >
      <p className="text-body px-[1.5rem] text-center font-semibold text-black-50">
        We collaborate with{" "}
        <span className="text-blue-100">50+ leading companies</span>
      </p>

      {/* companies logo */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {collaborateCompanies.map((company) => (
          <div
            key={company.src}
            className="relative h-[9rem] w-[9rem] md:h-[14rem] md:w-[14rem]"
          >
            <Image
              src={company.src}
              alt={company.name}
              className="h-full w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
