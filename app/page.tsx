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
import { slides } from "../lib/constants";

export default function PitchSlider() {
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
      className="w-full h-full overflow-hidden"
      setApi={setApi}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.title}>
            <section className="w-full  h-full max-w-7xl mx-auto overflow-hidden">
              <header className="w-full py-4 flex flex-col justify-center items-center sticky top-5">
                <h1 className="text-2xl lg:text-4xl text-center font-bold ">
                  {slide.title}
                </h1>
              </header>
              <section className="w-full max-h-full flex flex-col bg-yellow-300 justify-center items-stretch">
                <slide.content />
              </section>
            </section>
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
