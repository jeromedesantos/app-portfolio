import { Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { User } from "@/components/atoms/user";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <section
      className="pb-50 pt-40 px-5 flex flex-col gap-15 items-center"
      id={projects.id}
    >
      <div className="flex flex-col gap-5 max-w-6xl items-center">
        <motion.h1
          initial={{ opacity: 0, translateY: "100%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight tracking-tight duration-300"
        >
          {projects.title}
        </motion.h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl px-4">
        {projects.users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </section>
  );
}
