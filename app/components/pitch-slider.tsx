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
import { Team } from "./team-slide"
import { Competitors } from "./competitors-slide"
import { BusinessModel } from "./business-model-slide"

export function PitchSlider() {
  const Slides = [
    OpeningSlide,
    ProblemSlide,
    SolutionSlide,
    HykoSlide,
    ClientsSlide,
    Team
    , Competitors
    , BusinessModel
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
    <div
      style={{
        backgroundImage: `
      linear-gradient(to right, #E6F3FF 2px, transparent 1px),
      linear-gradient(to bottom, #E6F3FF 2px, transparent 1px)
    `,
        backgroundSize: "15px 15px",
      }}
      className="h-screen overflow-hidden"
    >
      <HykoLogo />

      <Carousel
        orientation="horizontal"
        className="w-full  overflow-hidden h-full" setApi={setApi}>
        <CarouselContent >
          {Slides.map((Item, index) => (
            <CarouselItem key={index} >
              <Item />
            </CarouselItem>
          ))}

        </CarouselContent>
        <div className="flex justify-center gap-2 items-center">
          <CarouselPrevious />
          <div className="flex justify-center h-full items-center">
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
    </div >
  )
}
