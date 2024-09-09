'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import OpeningSlide from "./slide-1"
import { ProblemSlide } from "./problem-slide"
import { SolutionSlide } from "./solution-slide"
import { HykoSlide } from "./hyko-slide"
import { ClientsSlide } from "./clients-slide"
import * as React from 'react'
import HykoLogo from "./Hykologo"

export function PitchSlider() {
  const Slides = [
    OpeningSlide,
    ProblemSlide,
    SolutionSlide,
  ]
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel
      style={{
        backgroundImage: `
      linear-gradient(to right, #E6F3FF 2px, transparent 1px),
      linear-gradient(to bottom, #E6F3FF 2px, transparent 1px)
    `,
        backgroundSize: "15px 15px",
      }}

      className="flex flex-col h-screen items-center justify-center overflow-hidden " setApi={setApi}>
      <HykoLogo />
      <CarouselContent className="w-full ml-0">
        {Slides.map((Item) => (
          <CarouselItem key={Item.toString()} className="flex w-full justify-center items-center">
            <Item />
          </CarouselItem>
        ))}

      </CarouselContent>
      <div className="flex justify-center gap-2 titems-center">
        <CarouselPrevious />
        <div className="flex justify-center items-center">
          {Slides.map((item, index) => (
            <span
              key={item.toString()}
              className={`inline-block w-2 h-2 rounded-full mx-1 ${index + 1 === current ? "bg-blue-600" : "bg-blue-300"}`}
            />
          ))}
        </div>
        <CarouselNext />
      </div>
    </Carousel>
  )
}
