"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card } from "@/components/ui/card";
import * as React from "react";
import { BusinessModel } from "./business-model-slide";
import { Competitors } from "./competitors-slide";
import { FAQ } from "./faq";
import { Features } from "./features";
import { HappyClients } from "./happy-clients";
import { Opening } from "./opening";
import { Team } from "./team-slide";
import { Problem } from "./the-problem";
import { Solution } from "./the-solution";
import { WhatDoWeThink } from "./what-do-we-think";
import WhoAreWe from "./who-are-we";
const slides = [
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
    title: "What problem we are solving?",
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
    title: "Our happy clients",
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
];

export function PitchSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    document.addEventListener("keydown", (event) => {
      const focusedElement = document.activeElement;
      if (focusedElement?.tagName !== "BUTTON") {
        if (event.key === "ArrowLeft") {
          return api.scrollPrev();
        }
        if (event.key === "ArrowRight") {
          return api.scrollNext();
        }
      }
    });

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      orientation="horizontal"
      className="w-full h-screen overflow-hidden flex justify-center items-center border"
      setApi={setApi}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <main className="flex flex-col pt-4 justify-center  items-center w-full h-screen max-w-7xl mx-auto overflow-y-scroll scrollbar-hide">
              <header className="w-full py-4 flex justify-center items-center sticky ">
                <h1 className="text-3xl font-bold">{slide.title}</h1>
              </header>
              <section className="w-full h-full ">
                <slide.content />
              </section>
            </main>
          </CarouselItem>
        ))}
      </CarouselContent>

      <Card className="absolute  bottom-3 left-[50%] w-fit flex justify-center items-center translate-x-[-50%] py-1 px-2">
        <div className="flex justify-center items-center gap-x-2">
          <CarouselPrevious />
          <div className="flex justify-center  items-center">
            {slides.map((slide, index) => (
              <span
                key={slide.title}
                className={`rounded-full mx-1 w-2 duration-300 h-2 hover:cursor-pointer ${
                  index + 1 === current ? "bg-primary" : "bg-border"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <CarouselNext />
        </div>
      </Card>
    </Carousel>
  );
}
