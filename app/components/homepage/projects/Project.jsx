"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-w-[300px] h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.05] cursor-pointer"
    >
      <Link href={project.demo} target="_blank">
        {/* Card Container */}
        <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 overflow-hidden">
          {/* Gradient Border Top */}
          <div className="flex -translate-y-[1px] justify-center">
            <div className="w-3/4">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
          </div>

          {/* Project Details */}
          <div className="flex flex-col items-start justify-center gap-3 p-6">
            {/* Project Name */}
            <h1 className="text-white text-xl font-semibold">{project.name}</h1>

            {/* Project Description */}
            <p className="text-gray-400 text-sm">
              {project.description.split(" ").slice(0, 20).join(" ")}...
            </p>

            {/* Tools Used */}
            <div className="flex flex-wrap gap-2">
              {project.tools.slice(0, 5).map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Role */}
            {/* <p className="text-sm text-gray-500 mt-2">
            <span className="font-medium">Role:</span> {project.role}
          </p> */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
