export interface MemberProps {
  tagline?: string;
  role: string;
  fullname: string;
  image: string;
}

export const teamContent = [
  { fullname: "1" },
  {
    fullname: "Darine Tag",
    role: "Product Designer ",
    image: "/team/darine.JPG",
  },
  { fullname: "1" },
  {
    fullname: "Mahdi KALLEL",
    role: "Scientific Advisor",
    image: "/team/mahdi.png",
  },

  { fullname: "1" },

  {
    fullname: "Samir Cheraft",
    role: "Office Manager",
    image: "/team/samir.png",
  },

  {
    fullname: "Hadj Khelil",
    role: "CEO and founder of BIGmama",
    image: "/team/hadj.png",
  },
  {
    fullname: "Ouassim Abdelmalek GHRIBI",
    role: "Lead Software Engineer",
    image: "/team/ouassim.png",
  },

  { fullname: "1" },
  {
    fullname: "Anfal Yousra BOUCETTA",
    role: "Software Engineer",
    image: "/team/yousra.png",
  },
  {
    fullname: "Louai Boumediene",
    role: "Backend Developer",
    image: "/team/louai.png",
  },

  {
    fullname: "Hachem Betrouni",
    role: "CTO",
    image: "/team/hachem.png",
  },
  {
    fullname: "Abderrahmane Hadj-Nacer",
    role: "Strategic Advisor",
    image: "/team/3ami-nacer.png",
  },
  { fullname: "1" },
  {
    fullname: "Jacques VINCENT",
    role: "Share holder",
    image: "/team/jaques-vincent.png",
  },
  {
    fullname: "J-P HERTEMAN",
    role: "Share holder",
    image: "/team/j-p-herteman.png",
  },
  {
    fullname: "Edgar MORIN",
    role: "Share holder",
    image: "/team/edgar-morin.png",
  },
  { fullname: "1" },
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
