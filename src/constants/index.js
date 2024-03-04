import {
  avatar,
  briefcase,
  caledar,
  contact,
  download,
  email,
  figma,
  github,
  graduate,
  instagram,
  linkedin,
  notion,
  phoneno,
  video,
  vscode,
} from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#myprojects", label: "My Projects" },
  { href: "#contact", label: "Contact" },
];

export const aboutMe = [
  { label: "Personal Info" },
  { label: "Qualifications" },
  { label: "Skills" },
];

export const socialIcons = [
  { socialicon: video, altname: "Video icon" },
  { socialicon: linkedin, altname: "Linkedin icon" },
  { socialicon: github, altname: "Github icon" },
  { socialicon: instagram, altname: "Instagram icon" },
];

export const heroButtons = [
  { label: "Contact Me", btnIcon: contact },
  { label: "Download CV", btnIcon: download },
];

export const personalInfo = [
  { icon: avatar, label: "Eric Ngugi" },
  { icon: email, label: "ericngugi24@gmail.com" },
  { icon: graduate, label: "Information Technology" },
  { icon: phoneno, label: "254790688795" },
  { icon: caledar, label: "1 year experience" },
];

export let experience = [{ icon: briefcase }];
export let education = [{ icon: graduate }];

export const qualifications = [
  { institution: "TARDA", title: "IT Intern", period: "2020-2020" },
  { institution: "Dejavu Tech", title: "IT Intern", period: "2022-2023" },
  {
    institution: "JKUAT",
    title: "Information Technology",
    period: "2018-2022",
  },
  {
    institution: "Moringa School",
    title: "Software Engineering",
    period: "2021-2022",
  },
];

export const skills = [
  { skill: "HTML,CSS", stack: "Frontend" },
  { skill: "Javascript", stack: "Frontend" },
  { skill: "React ,Angular ,React Native", stack: "Frontend framework" },
  { skill: "Node Js ,Python ,PHP", stack: "Backend" },
  { skill: "Django", stack: "Backend framework" },
  { skill: "SQL ,NoSQL", stack: "Database language" },
  { skill: "MySQL ,MongoDB", stack: "Database " },
];

export const tools = [
  { tool: vscode, altname: "Vscode" },
  { tool: figma, altname: "Figma" },
  { tool: notion, altname: "Notion" },
];
