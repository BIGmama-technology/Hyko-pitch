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
  const [currentSlide, setCurrentSlide] = React.useState()
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
    <div className="flex flex-col max-h-screen">
      <Carousel className="" setApi={setApi}>
        <CarouselContent className="max-w-4xl">
          {Slides.map((Item) => (
            <CarouselItem key={Item.toString()} className="flex justify-center items-center">
              <Item />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel >
      <div className="flex justify-center mt-4">
        {Slides.map((item, index) => (
          <span
            key={item.toString()}
            className={`inline-block w-2 h-2 rounded-full mx-1 ${index + 1 === current ? "bg-blue-600" : "bg-blue-300"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
