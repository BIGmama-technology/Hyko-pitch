"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Item {
	name: string;
	description: string;
	icon: string;
	color: string;
}

const benefits = [
	{
		name: "Affordable",
		description: "Fraction of the cost of tailored soloutions",
		icon: "💰",
		color: "#00C9A7",
	},
	{
		name: "Combineable",
		description: "Agents can work together and intergrate with exisiting tools",
		icon: "🔗",
		color: "#FF6F61",
	},
	{
		name: "Customizable",
		description: "Offering flexibility to adjust workflows and preferences",
		icon: "🎨",
		color: "#E67E22",
	},
	{
		name: "Autonomous",
		description: "Reduced need for constant human oversight",
		icon: "🤖",
		color: "#2C3E50",
	},
	{
		name: "Universal",
		description: "Everyone can use AI agents across industries",
		icon: "🌎",
		color: "#2C3E50",
	},
	{
		name: "Explainable",
		description: "Easily to understand and trust the decision-making processes",
		icon: "🧠",
		color: "#3498DB",
	},
];

const Benefit = ({ name, description, icon, color }: Item) => {
	return (
		<div className="flex flex-row items-center gap-4 p-4">
			<div
				className="flex size-12 items-center justify-center rounded-full"
				style={{
					backgroundColor: color,
				}}
			>
				<span className="text-2xl">{icon}</span>
			</div>
			<div className="flex flex-col">
				<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
					{name}
				</h3>
				<p className="text-sm text-gray-600 dark:text-gray-300">
					{description}
				</p>
			</div>
		</div>
	);
};

export function WhatDoWeThink() {
	return (
		<div className="flex flex-col lg:flex-row gap-y-4 justify-center items-center h-full">
			<div className="flex flex-col justify-between gap-y-6 lg:px-[5%] text-center items-center lg:w-1/2">
				<h1 className="text-2xl lg:text-4xl leading-relaxed">
					{" "}
					<span className="font-bold text-blue-600">Agents</span> are the future
					of AI, <span className="font-bold text-yellow-400">Why ?</span>
					{"\n"}
					Because agents offer a solution to the biggest AI issues! and it's not
					only our vision It's major players point of view, e.g.{" "}
					<span className="text-purple-400 underline">
						<Link
							href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/why-agents-are-the-next-frontier-of-generative-ai?stcr=AF6B9CB453764286AF46902E388F0540&cid=other-eml-alt-mip-mck&hlkid=7fd5040f72544d80b7ed7a367130646e&hctky=14813738&hdpid=62a61fa0-2d7d-4f20-997f-b7375d5d1f4c"
							target="_blank"
						>
							McKinsey
						</Link>
					</span>
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center min-h-[500px] h-[500px] gap-y-4 w-full lg:w-1/2">
				<h2 className="text-xl lg:text-4xl leading-snug">
					<span className="font-bold text-blue-600">Agents</span> make AI
				</h2>
				<div className="w-full">
					{benefits.map((item) => (
						<Benefit key={item.name} {...item} />
					))}
				</div>
			</div>
		</div>
	);
}
