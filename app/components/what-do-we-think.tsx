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
    <div className=" flex justify-center items-center h-full">
      <div className="flex flex-col justify-between gap-y-6 px-[5%] text-center items-center w-2/3">
        <p className="text-5xl leading-snug">
          {" "}
          <span className="font-bold text-red-600">Agents</span> are the future
          of AI, <span className="font-bold text-blue-600">Why?</span>
          {"\n"}
          Because agents offer a solution to the biggest AI issues, Agents make
          AI:
        </p>
      </div>
      <div className="flex justify-center items-center p-2 h-[420px] overflow-hidden w-1/3">
        <AnimatedList delay={2000} className="w-full">
          {benefits.map((item, idx) => (
            <Benefit {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}
