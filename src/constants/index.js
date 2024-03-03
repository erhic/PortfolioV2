import {
  contact,
  download,
  github,
  instagram,
  linkedin,
  video,
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
