import Marquee from "@/components/ui/marquee";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const reviews: Review[] = [
	{
		name: "Alexandre Jardin",
		body: "What you manage to do is crazy. You're crazy!",
		img: "/human-clients/jardin.png",
		title: "French author",
	},
	{
		name: "Emmanuel Lechypre",
		body: "It's mind-boggling! People who don't take advantage of this kind of technology will find themselves back in the Middle Ages",
		img: "/human-clients/lechypre.png",
		title: "Lead journalist at BFM",
	},
	{
		name: "Gilles Babinet",
		body: "Hyko is a technologically remarkable tool",
		img: "/human-clients/babinet.jpg",
		title: "Entrepreneur, European technology champion",
	},
	{
		name: "Samy Bengio",
		body: "The Agent you made in a few hours could be of interest to millions of people",
		img: "/human-clients/samm.jpeg",
		title: "Senior Director of AI research at Apple",
	},
	{
		name: "Emmanuelle Duez",
		body: "What Hyko has done in just a few hours saves me 75,000 euros a year",
		img: "/human-clients/duez.png",
		title: "Inspirational entrepreneur",
	},
	{
		name: "Karim Bouazoune",
		body: "Hyko saves me hours and hours a day",
		img: "/human-clients/bouzz.png",
		title: "PHD at Harvard university, Assoc. Prof.",
	},
	{
		name: "Maxime Verner",
		body: "It’s excellent, well done guys!",
		img: "/human-clients/max.jpeg",
		title: "Politician",
	},
	{
		name: "Younes Brahimi",
		body: "Hyko can easily save me half an hour a day, with eaaaase !",
		img: "/human-clients/brahimii.png",
		title: "Resuscitator",
	},
	{
		name: "Karim Allam",
		body: "In barely 10 seconds, 2 clicks and it's done. Congratulations on that !",
		img: "/human-clients/allamm.png",
		title: "Multi-entrepreneur",
	},
];
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, body, title }: Review) => {
	return (
		<figure
			className={cn(
				"relative w-[350px] cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image
					className="rounded-full aspect-square object-cover"
					width={40}
					height={40}
					alt=""
					src={img}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
			<blockquote className="mt-2 text-xs text-start">{title}</blockquote>
			<blockquote className="mt-2 text-md text-start">{body}</blockquote>
		</figure>
	);
};

export function Testimonials() {
	return (
		<div className="flex w-full h-screen flex-col items-center justify-center  text-center z-50">
			<h1 className="text-2xl mb-4 lg:mb-8 lg:text-4xl leading-relaxed">
				What do rockstars say about us!
			</h1>
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>
			<h1 className="text-2xl mt-4 lg:mt-8 lg:text-4xl leading-relaxed">
				Full Video{" "}
				<span className="font-bold text-blue-600 underline">
					<Link
						href="https://www.youtube.com/watch?v=bWK0EfiBN8w"
						target="_blank"
					>
						Here
					</Link>
				</span>
			</h1>
		</div>
	);
}
