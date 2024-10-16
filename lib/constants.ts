import { ContactUs } from "@/components/slides/contact-us";
import { Features } from "@/components/slides/features";
import { BusinessModel } from "../components/slides/business-model";
import { Competitors } from "../components/slides/competitors";
import { FAQ } from "../components/slides/faq";
import { HappyClients } from "../components/slides/happy-clients";
import { Opening } from "../components/slides/opening";
import { Problem } from "../components/slides/problem";
import { Solution } from "../components/slides/solution";
import { Team } from "../components/slides/team";
import { Testimonials } from "../components/slides/testimonials";
import { WhatDoWeThink } from "../components/slides/what-do-we-think";
import WhoAreWe from "../components/slides/who-are-we";

export interface MemberProps {
  coreTeam?: boolean;
  role: string;
  fullName: string;
  image: string;
}

export const slides = [
  {
    title: "Hi, It's Hyko!",
    content: Opening,
  },
  {
    title: "Who are we?",
    content: WhoAreWe,
  },
  {
    title: "What do we think?",
    content: WhatDoWeThink,
  },
  {
    title: "We learned from over a decade in the ground field that:",
    content: Problem,
  },
  {
    title: "Solution? It's Hyko!!!",
    content: Solution,
  },
  {
    title: "Our lovely team",
    content: Team,
  },
  {
    title: "Why we are ahead of the rest?",
    content: Competitors,
  },
  {
    title: "Our latest features",
    content: Features,
  },
  {
    title: "What our rock stars say about us!",
    content: Testimonials,
  },
  {
    title: "Our happy clients/users",
    content: HappyClients,
  },
  {
    title: "Our business model",
    content: BusinessModel,
  },
  {
    title: "FAQ",
    content: FAQ,
  },
  {
    title: "Contact Us",
    content: ContactUs,
  },
];

export const teamContentMobile = [
  { fullName: "1" },

  { fullName: "1" },
  { fullName: "1" },
  {
    fullName: "Mahdi KALLEL",
    role: "Scientific Advisor",
    image: "/team/mahdi.png",
  },

  { fullName: "1" },

  {
    coreTeam: true,
    fullName: "Samir Cheraft",
    role: "Office Manager",
    image: "/team/samir.png",
  },

  {
    coreTeam: true,
    fullName: "Anfal Yousra BOUCETTA",
    role: "Software Engineer",
    image: "/team/yousra.png",
  },

  {
    coreTeam: true,
    fullName: "Louai Boumediene",
    role: "Backend Developer",
    image: "/team/louai.png",
  },
  {
    coreTeam: true,
    fullName: "Hadj Khelil",
    role: "CEO and founder of BIGmama",
    image: "/team/hadj.png",
  },
  {
    coreTeam: true,
    fullName: "Hachem Betrouni",
    role: "CTO",
    image: "/team/hachem.png",
  },
  {
    coreTeam: true,
    fullName: "Darine Tag",
    role: "Product Designer ",
    image: "/team/darine.JPG",
  },
  {
    fullName: "Abderrahmane Hadj-Nacer",
    role: "Strategic Advisor",
    image: "/team/3ami-nacer.png",
  },
  {
    fullName: "Jacques VINCENT",
    role: "Share holder",
    image: "/team/jaques-vincent.png",
  },
  {
    fullName: "J-P HERTEMAN",
    role: "Share holder",
    image: "/team/j-p-herteman.png",
  },
  {
    fullName: "Edgar MORIN",
    role: "Share holder",
    image: "/team/edgar-morin.png",
  },
  { fullName: "1" },
];

export const teamContent = [
  { fullName: "1" },
  {
    fullName: "Mahdi KALLEL",
    role: "Scientific Advisor",
    image: "/team/mahdi.png",
  },

  { fullName: "1" },
  { fullName: "1" },

  { fullName: "1" },

  {
    coreTeam: true,
    fullName: "Samir Cheraft",
    role: "Office Manager",
    image: "/team/samir.png",
  },

  {
    coreTeam: true,
    fullName: "Hadj Khelil",
    role: "CEO and founder of BIGmama",
    image: "/team/hadj.png",
  },
  {
    coreTeam: true,
    fullName: "Hachem Betrouni",
    role: "CTO",
    image: "/team/hachem.png",
  },

  { fullName: "1" },
  {
    coreTeam: true,
    fullName: "Darine Tag",
    role: "Product Designer ",
    image: "/team/darine.JPG",
  },

  {
    coreTeam: true,
    fullName: "Louai Boumediene",
    role: "Backend Developer",
    image: "/team/louai.png",
  },
  {
    coreTeam: true,
    fullName: "Anfal Yousra BOUCETTA",
    role: "Software Engineer",
    image: "/team/yousra.png",
  },

  {
    fullName: "Abderrahmane Hadj-Nacer",
    role: "Strategic Advisor",
    image: "/team/3ami-nacer.png",
  },
  { fullName: "1" },
  {
    fullName: "Jacques VINCENT",
    role: "Share holder",
    image: "/team/jaques-vincent.png",
  },
  {
    fullName: "J-P HERTEMAN",
    role: "Share holder",
    image: "/team/j-p-herteman.png",
  },
  {
    fullName: "Edgar MORIN",
    role: "Share holder",
    image: "/team/edgar-morin.png",
  },
  { fullName: "1" },
];

export interface FaqProps {
  title: string;
  items: string[];
}

export const faqContent: FaqProps[] = [
  {
    title: "WHY USE HYKO ON A RECURRING BASIS?",
    items: [
      "Hyko helps you automate your daily workflows (which are by definition used everyday).",
      "AI is constantly moving. Everyday you have new tools, new API's, etc ready to use on hyko.",
      "Problems (by nature) always change. Hyko offers you the opportunity to enhance your solutions on a daily basis.",
    ],
  },
  {
    title: "WHY ARE WE CONFIDENT IN OUR VISION OF THE FUTURE?",
    items: [
      'Real disruption comes from the bottom. We are offering to "common" people a plausible opportunity to take a quantum leap. What we offer is a new boat to sail the AI ocean.',
    ],
  },
  {
    title: "WHAT IS OUR TARGET (medium term)",
    items: [
      "Offering our users an efficient AI assistant that would help them convert their issues into ready-to-use blueprints on Hyko. (problematization)",
      'Ability to export your AI tools into "friendly" apps with one button.',
      "Increase the size of our toolkit by supporting more integrations (web scraping utilities, data connectors and webhooks).",
      "Ability for users/organizations to add custom models and tools to their private toolkit.",
    ],
  },
  {
    title: "WHAT IS OUR COMPETITIVE ADVANTAGE ?",
    items: [
      "We understood before anyone else how artificial intelligence could be used to solve complex problems in the daily lives of professionals.",
      "10 years experience on the ground with dozens of clients allowed us to conceive a unique approach/ methodology for problem-solving.",
    ],
  },
  {
    title: "WHY ARE WE UNIQUE?",
    items: [
      "First, Hyko constitutes of a very large codebase. Even with a blueprint, reproduction could take months for a competent team (for only the very first iteration of the process).",
      "Our vision is so different (we believe more in people than in machines) that our competitors don't see the market in the same way we do.",
      "The quality of our team means that even someone with the same great idea as us couldn't do it as quickly.",
      "Most importantly, is the ability to redesign Hyko's architecture in line with the day- to - day changes in our industry. This requires great strategic expertise, an outstanding technological capacity, a rare ability to execute and an extraordinary intuition.All this, is very difficult to replace.",
    ],
  },
  {
    title: "WHAT IS OUR VISION ?",
    items: [
      "The future value of AI will not come from AI engineers or data scientists, it will come from field experts who will be able to combine their expertise with AI in order to solve daily problems.",
    ],
  },
];
