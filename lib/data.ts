import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import smakImg from "@/public/smak.png";
import sportkampenImg from "@/public/sportkampen.png";
import sportkampenJavaImg from "@/public/sportkampenJava.png";
import zuulImg from "@/public/zuul.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT: Programming",
    location: "Antwerp",
    description:
      "I graduated after studying at the Thomas More college in Antwerp.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Internship Amotek",
    location: "Kontich",
    description:
      "I worked with Azure Data Explorer and made the dashboard for a project with TypeScript and React",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Internship Arinti",
    location: "Mechelen",
    description: "Soon...",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Smak webApp (be-real clone)",
    description:
      "I worked as a back-end developer on this school group project. Just a Be-Real clone for the Smak Museum in Ghent.",
    tags: ["Java", "Spring Boot", "Firebase", "Bootstrap", "Thymeleaf"],
    imageUrl: smakImg,
  },
  {
    title: "Sportkampen Js",
    description:
      "School project, users can find information about sportcamps. Data stored in firebase Database.",
    tags: ["React", "JavaScript", "Bootstrap", "Firebase"],
    imageUrl: sportkampenImg,
  },
  {
    title: "Sportkampen Java",
    description:
      "School project, users can find information about sportcamps with extra information for each camp.",
    tags: ["Java", "Spring Boot", "H2-database", "Bootstrap", "Thymeleaf"],
    imageUrl: sportkampenJavaImg,
  },
  {
    title: "Zuul-Text-Based game",
    description:
      "World of Zuul is a simple text based game where player wanders around a fantasy island.",
    tags: ["Java", "Object Oriented Programming"],
    imageUrl: zuulImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Jira",
  "MongoDB",
  "Firebase",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Python",
  "Cypress",
] as const;
