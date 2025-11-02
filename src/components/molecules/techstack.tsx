"use client";

import { motion } from "framer-motion";

export function TechStack() {
  return (
    <section
      id={"Ex"}
      className="flex flex-col gap-10 pt-20 py-10 px-5 items-center bg-accent"
    >
      <div className="flex flex-col gap-5">
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          {"Tech Stack - Tools I Use Everyday"}
        </motion.h1>
      </div>
      <section id="tech-stack">{/* <StackCarousel /> */}</section>
    </section>
  );
}
