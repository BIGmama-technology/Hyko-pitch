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

export function PitchSlider() {
  const Slides = [
    OpeningSlide,
    ProblemSlide,
    SolutionSlide,
    HykoSlide,
    ClientsSlide,
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
    <div className="flex flex-col max-h-[100vh] overflow-y-scroll overflow-x-hidden">
      <Carousel className="w-ful" setApi={setApi}>
        <CarouselContent className="w-full max-w-[90vw]  max-h-[80vh] sm:max-h-[95vh]  sm:max-w-lg md:max-w-4xl ">
          {Slides.map((Item) => (
            <CarouselItem key={Item.toString()} className="flex overflow-y-scroll justify-center items-center">
              <Item />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex justify-center pt-4">
        {Slides.map((item, index) => (
          <span
            key={item.toString()}
            className={`inline-block w-2 h-2 rounded-full mx-1 ${index + 1 === current ? "bg-blue-600" : "bg-blue-300"}`}
          />
        ))}
      </div>
    </div>
  )
}
