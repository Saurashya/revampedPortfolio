"use client";

import Heading from "@/components/Heading/heading";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiStackLine } from "react-icons/ri";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Zustand", icon: RiStackLine, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 pt-20 px-3 lg:px-8">
      <Heading number="02" title_1={"My"} title_2={"Stack"} />

      <Stagger
        stagger={0.06}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <StaggerItem key={name}>
            <div className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-primary-background p-4 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] sm:p-5">
              <Icon
                size={28}
                style={{ color }}
                className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                aria-hidden
              />
              <span className="text-sm font-medium text-primary-foreground sm:text-base">
                {name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default Skills;
