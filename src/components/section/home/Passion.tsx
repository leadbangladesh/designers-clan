/* eslint-disable react/no-unescaped-entities */
"use client";

import { defaultAnimation } from "@/src/app/utils/animation";
import { motion } from "framer-motion";

export default function Passion() {
  return (
    <motion.section
      className="bg-light-gray"
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: "-240px",
      }}
    >
      <div className="mx-auto mt-[2.56rem] flex max-w-[77.5rem] flex-col gap-[1.5rem] px-[1.5rem] py-[2.5rem] md:mt-[0.5rem] md:flex-row md:py-[4.5rem]">
        <h2 className="text-h2 flex-1">We are passionate</h2>
        <p className="text-body flex-1 text-black-50">
          Exceeding expectations is our foremost objective. Our purpose is to
          embrace and amplify your vision, forging it into a seamless and
          exceptional product. Our commitment goes beyond the terms of our
          agreement, striving to deliver even more.
          <br />
          <br />
          Our methodology centers around a customer-centric approach. In today's
          landscape of brand communication, we aim to create engagement that
          truly captivates people's desires. Our primary focus is on
          comprehending and enlivening your audience.
          <br />
          <br />
          While it may entail challenges and consume time, we abstain from
          shortcuts. Our sense of pride in our mission is unwavering, and it is
          this very disposition that defines our essence.
        </p>
      </div>
    </motion.section>
  );
}
