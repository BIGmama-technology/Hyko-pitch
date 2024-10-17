import { ContactUs } from "@/components/slides/contact-us";
import { Features } from "@/components/slides/features";
import { Problems } from "@/components/slides/problem";
import Team from "@/components/slides/team";
import { BusinessModel } from "../components/slides/business-model";
import { Competitors } from "../components/slides/competitors";
import { FAQ } from "../components/slides/faq";
import { HappyClients } from "../components/slides/happy-clients";
import { Opening } from "../components/slides/opening";
import { Solution } from "../components/slides/solution";
import { Testimonials } from "../components/slides/testimonials";
import { WhatDoWeThink } from "../components/slides/what-do-we-think";
import WhoAreWe from "../components/slides/who-are-we";
export const slides = [
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
		title: "We learned from over a decade in the ground field that:",
		content: Problems,
	},
	{
		title: "Solution? It's Hyko !!!",
		content: Solution,
	},
	{
		title: "Our latest features",
		content: Features,
	},
	{
		title: "Why we are ahead of the rest?",
		content: Competitors,
	},
	{
		title: "Our lovely team",
		content: Team,
	},
	{
		title: "What our rock stars say about us!",
		content: Testimonials,
	},
	{
		title: "Our happy clients/users",
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
	{
		title: "Contact Us",
		content: ContactUs,
	},
];
