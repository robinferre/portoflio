import { skills } from "./resume/skills";
import { experiences } from "./resume/experiences";
import { education } from "./resume/education";
import { hobbies } from "./resume/hobbies";

export const commands = [
  {
    name: "skills",
    get() {
      return skills;
    },
  },
  {
    name: "experiences",
    get() {
      return experiences;
    },
  },
  {
    name: "education",
    get() {
      return education;
    },
  },
  {
    name: "hobbies",
    get() {
      return hobbies;
    },
  },
  {
    name: "contact",
    get() {
      return `<p>robin.ferre@gmail.com</p><p>https://www.linkedin.com/in/robinferre/</p><p>https://www.malt.fr/profile/robinferre1</p>`;
    },
  },
  {
    name: "download-resume-en",
    get() {
      return ``;
    },
  },
  {
    name: "download-resume-fr",
    get() {
      return ``;
    },
  },
  {
    name: "info",
    get() {
      return `<p>project developed with vue3 and Salah Eddine Bentayeb's vue-shell <3</p><p>2022</p>`;
    },
  },
];
