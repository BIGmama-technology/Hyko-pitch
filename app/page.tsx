"use client";

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import SharePitch from "@/components/share-pitch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Share2 } from "lucide-react";
import * as React from "react";
import { slides } from "../lib/constants";

export default function PitchSlider() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [, setCurrent] = React.useState(0);

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
			className="min-h-screen flex justify-center items-center w-full h-screen"
			setApi={setApi}
		>
			<CarouselContent className="max-h-screen">
				{slides.map((slide) => (
					<CarouselItem key={slide.title}>
						<section className="max-h-screen h-full max-w-7xl flex flex-col justify-center w-full relative mx-auto overflow-y-scroll  px-4 py-4 lg:p-6 lg:pt-0">
							<slide.content />
						</section>
					</CarouselItem>
				))}
			</CarouselContent>
			<Card className="fixed bottom-3 left-[50%] w-fit flex justify-center items-center translate-x-[-50%] py-1 px-2 z-[999]">
				<div className="flex justify-center items-center relatives gap-x-2">
					<SharePitch>
						<Button variant="ghost" size="icon">
							<Share2 size={16} />
						</Button>
					</SharePitch>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => api?.scrollTo(slides.length - 1)}
					>
						<Calendar size={16} />
					</Button>
					<Separator orientation="vertical" className="h-6 " />
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Card>
		</Carousel>
	);
}
