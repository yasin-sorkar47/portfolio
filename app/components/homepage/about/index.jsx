// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import { motion } from "motion/react";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-16">
        <div className="order-2 lg:order-1 flex items-center flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium mb-5 text-[#16f2b3] text-xl uppercase"
          >
            Who Am I?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 3,

              type: "spring",
              stiffness: 100,
            }}
            className="text-gray-200 text-sm lg:text-lg"
          >
            {personalData.description}
          </motion.p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg overflow-hidden"
            >
              <Image
                src={personalData.profile}
                width={320}
                height={320}
                alt="Yasin Sarkar"
                className="rounded-lg transition-all duration-1000 grayscale-0  hover:grayscale cursor-pointer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
