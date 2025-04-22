"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <Typewriter
      words={["Front-End Developer", "Web Developer"]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={100}
      deleteSpeed={70}
    />
  );
}
