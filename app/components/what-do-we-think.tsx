"use client";

import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

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
      <div className="flex flex-col justify-between gap-y-6 lg:px-[5%] text-center items-center w-2/3">
        <h1 className="text-2xl lg:text-4xl leading-relaxed">
          {" "}
          <span className="font-bold text-red-600">Agents</span> are the future
          of AI, <span className="font-bold text-blue-600">Why?</span>
          {"\n"}
          Because agents offer a solution to the biggest AI issues!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center h-[500px] gap-y-4 w-full lg:w-[40%]">
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
