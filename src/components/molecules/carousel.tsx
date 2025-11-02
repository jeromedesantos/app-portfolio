"use client";
import React from "react";
import { motion } from "framer-motion";
import * as icons from "react-icons/si";
import techStack from "@/data/tech-stack.json";

const iconMap = icons as Record<string, React.ElementType>;

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1.2,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

// Render semua ikon tanpa animasi dalam grid responsif
export function Carousel() {
  return (
    <div className="w-full p-4">
      {techStack && techStack.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">
          {techStack.map((tech, idx) => {
            const Icon = iconMap[tech.icon];
            if (!Icon) return null;
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={idx}
              >
                <Icon className="text-4xl md:text-5xl" />
                <span className="mt-2 text-xs md:text-sm text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <span className="text-sm text-muted-foreground">
          No tech stack available
        </span>
      )}
    </div>
  );
}
