"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import * as React from "react";
import { BusinessModel } from "./business-model-slide";
import { ClientsSlide } from "./clients-slide";
import { Competitors } from "./competitors-slide";
import { FaqSlide } from "./faq-slide";
import { HykoSlide } from "./hyko-slide";
import HykoLogo from "./Hykologo";
import { ProblemSlide } from "./problem-slide";
import OpeningSlide from "./slide-1";
import { SolutionSlide } from "./solution-slide";
import { Team } from "./team-slide";
import { ProblemSlide1 } from "./problem-slide-1";

export function PitchSlider() {
  const Slides = [
    OpeningSlide,
    ProblemSlide1,
    ProblemSlide,
    SolutionSlide,
    HykoSlide,
    ClientsSlide,
    Team,
    Competitors,
    BusinessModel,
    FaqSlide,
  ];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') api.scrollPrev()
      if (event.key === "ArrowRight") api.scrollNext()
    })
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      style={{
        backgroundImage: `
      linear-gradient(to right, #E6F3FF 2px, transparent 1px),
      linear-gradient(to bottom, #E6F3FF 2px, transparent 1px)
    `,
        backgroundSize: "15px 15px",
      }}
      className="h-screen overflow-hidden flex flex-col"
    >
      <HykoLogo />

      <Carousel
        orientation="horizontal"
        className="w-full  overflow-hidden  "
        setApi={setApi}
      >
        <CarouselContent>
          {Slides.map((Item, index) => (
            <CarouselItem key={index}>
              <Item />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center p-2 gap-2 items-center ">
          <CarouselPrevious />
          <div className="flex justify-center  items-center">
            {Slides.map((item, index) => (
              <span
                key={item.toString()}
                className={`inline-block px-2 py-1 rounded-full text-white mx-1 hover:cursor-pointer ${index + 1 === current ? "bg-blue-600" : "bg-blue-300"}`}
                onClick={() => api?.scrollTo(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <CarouselNext />

        </div>

      </Carousel>
    </div>
  );
}
