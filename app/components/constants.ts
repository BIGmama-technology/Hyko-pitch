export interface TeamProps {
  tagline?: string;
  role: string;
  fullname: string;
  image: string;
  linkedin: string;
}

export const teamContent: TeamProps[] = [
  {
    fullname: "Hadj Khelil",
    role: "CEO and founder of BIGmama",
    linkedin: "https://www.linkedin.com/in/hadj-khelil-60b0952/",
    image: "/team/hadj.png",
  },
  {
    fullname: "Hachem Betrouni",
    role: "CTO",
    linkedin: "https://dz.linkedin.com/in/hachem-betrouni",
    image: "/team/hachem.png",
  },
  {
    fullname: "Ouassim Abdelmalek GHRIBI",
    role: "Lead Software Engineer",
    linkedin: "https://dz.linkedin.com/in/ouassimg",
    image: "/team/ouassim.png",
  },
  {
    fullname: "Samir Cheraft",
    role: "Office Manager",
    linkedin: "https://dz.linkedin.com/in/samir-cheraft-94449a57",
    image: "/team/samir.png",
  },
  {
    fullname: "Anfal Yousra BOUCETTA",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/anfal-yousra-boucetta/",
    image: "/team/yousra.png",
  },
  {
    fullname: "Louai Boumediene",
    role: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/louai-boumediene-018919262/",
    image: "/team/louai.png",
  },
  {
    fullname: "Abdelkarim menna",
    role: "Frontend Developer",
    linkedin: "https://www.linkedin.com/in/karimmenna/",
    image: "/team/karim.png",
  },
  {
    fullname: "Darine Tag",
    role: "Product Designer ",
    linkedin: "https://www.linkedin.com/in/darine-tag/",
    image: "/team/darine.JPG",
  },
  {
    fullname: "Abderrahmane Hadj-Nacer",
    role: "Strategic Advisor",
    linkedin: "https://fr.wikipedia.org/wiki/Abderrahmane_Hadj-Nacer",
    image: "/team/3ami-nacer.png",
  },
  {
    fullname: "Amira Belkis BOUSSOUF",
    role: "Legal Advisor",
    linkedin: "https://www.linkedin.com/in/amira-belkis-boussouf-a6943bba/",
    image: "/team/amira.png",
  },
  {
    fullname: "Mahdi KALLEL",
    role: "Scientific Advisor",
    linkedin: "https://fr.linkedin.com/in/kallel-mahdi",
    image: "/team/mahdi.png",
  },
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
