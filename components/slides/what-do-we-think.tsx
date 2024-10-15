"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
}

let benefits = [
  {
    name: "Affordable",
    description: "Cost-effective solution",
    icon: "💰",
    color: "#00C9A7",
  },
  {
    name: "Explainable",
    description: "Easy to understand",
    icon: "🧠",
    color: "#FFB800",
  },
  {
    name: "Feasible",
    description: "Practical to implement",
    icon: "🛠️",
    color: "#FF3D71",
  },
  {
    name: "Sharable",
    description: "Easy to distribute",
    icon: "🔗",
    color: "#1E86FF",
  },
  {
    name: "Useful",
    description: "Provides real value",
    icon: "✅",
    color: "#8A4FFF",
  },
];

benefits = Array.from({ length: 10 }, () => benefits).flat();

const Benefit = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit cursor-pointer overflow-hidden rounded-2xl p-4 w-full",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function WhatDoWeThink() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 justify-center items-center h-full">
      <div className="flex flex-col justify-between gap-y-6 lg:px-[5%] text-center items-center lg:w-1/2">
        <h1 className="text-2xl lg:text-4xl leading-relaxed">
          {" "}
          <span className="font-bold text-red-600">Agents</span> are the future
          of AI, <span className="font-bold text-blue-600">Why?</span>
          {"\n"}
          Because agents offer a solution to the biggest AI issues! and it's not
          only our vision It's major players point of view{" "}
          <span className="font-bold text-red-600 underline">
            <Link
              href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/why-agents-are-the-next-frontier-of-generative-ai?stcr=AF6B9CB453764286AF46902E388F0540&cid=other-eml-alt-mip-mck&hlkid=7fd5040f72544d80b7ed7a367130646e&hctky=14813738&hdpid=62a61fa0-2d7d-4f20-997f-b7375d5d1f4c"
              target="_blank"
            >
              Mc Kinsey
            </Link>
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center min-h-[500px] h-[500px] gap-y-4 w-full lg:w-1/2">
        <h2 className="text-xl lg:text-4xl leading-snug">
          <span className="font-bold text-red-600">Agents</span> makes AI
        </h2>
        <div className="overflow-hidden w-full">
          <AnimatedList delay={2000} className="w-full overflow-hidden p-2">
            {benefits.map((item, idx) => (
              <Benefit {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </div>
  );
}
