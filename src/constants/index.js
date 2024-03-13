import {
  app,
  avatar,
  briefcase,
  caledar,
  contact,
  design,
  develop,
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
import {
  stockapp,
  mbankapp,
  jobwebsite,
  toataka,
  pizzawebsite,
  neighbourhood,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/allprojects", label: "My Projects" },
  { href: "/contact", label: "Contact" },
];

export const aboutMe = [
  { label: "Personal Info" },
  { label: "Qualifications" },
  { label: "Skills" },
];

export const socialIcons = [
  // { socialicon: video, altname: "Video icon", link: "" },
  {
    socialicon: linkedin,
    altname: "Linkedin icon",
    link: "https://www.linkedin.com/in/ericngugi/",
  },
  {
    socialicon: github,
    altname: "Github icon",
    link: "https://github.com/erhic",
  },
  // { socialicon: instagram, altname: "Instagram icon", link: "" },
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
  { skill: "React ,Angular , React Native", stack: "Frontend framework" },
  { skill: "Node Js , Python , PHP", stack: "Backend" },
  { skill: "Django", stack: "Backend framework" },
  { skill: "SQL , NoSQL", stack: "Database language" },
  { skill: "MySQL , MongoDB", stack: "Database " },
];

export const tools = [
  { tool: vscode, altname: "Vscode" },
  { tool: figma, altname: "Figma" },
  { tool: notion, altname: "Notion" },
];

export const services = [
  {
    icon: design,
    title: "Web Design",
    description: "Crafting stunning websites to showcase your  brand.",
  },
  {
    icon: develop,
    title: "Web Development",
    description: "Creating websites to elevate  online presence.",
  },
  {
    icon: app,
    title: "App Development",
    description: "Developing innovative apps to elevate user experiences  .",
  },
];

export const project = [
  {
    language: "Angular",
    image: stockapp,
    projectName: "Stock Management",
    description: "Web app to manage inventory operation",
  },
  {
    language: "React Native",
    image: mbankapp,
    projectName: "Mbank App",
    description: "Mobile app to perform banking transactions",
  },
  {
    language: "React",
    image: jobwebsite,
    projectName: "Gigs Web app",
    description: "Web app to manage job applications and applicant ",
  },
  {
    language: "React",
    image: toataka,
    projectName: "Toataka",
    description: "Web app for waste management and services",
  },
  {
    language: "Vanilla JS",
    image: pizzawebsite,
    projectName: "Pizzadepiz",
    description: "Web app for ordering different pizza variety",
  },
  {
    language: "Python",
    image: neighbourhood,
    projectName: "Neighbourhood",
    description: "Web app for linking business and contact managements",
  },
];

export const devStack = [
  { stacks: "React" },
  { stacks: "Angular" },
  { stacks: "Node" },
  { stacks: "Python" },
  { stacks: "PHP" },
];
export const reviews = [
  {
    person: "Bridget",
    work: "Developer",
    comment: "A team member who contributes and is ready to get feedback .",
  },
  {
    person: "Chrispus",
    work: "Fullstack Developer",
    comment: "Creative in designing appealing User Interface with figma .",
  },
  {
    person: "Ken",
    work: "ICT Officer",
    comment: " Willing to listen, learn things and collaborate with others . ",
  },
];
