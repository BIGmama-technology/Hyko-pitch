import Image from "next/image";

import Particles from "../ui/particles";

export function Opening() {
	return (
		<div className="w-full h-screen rounded-md overflow-hidden flex justify-center items-center flex-col gap-y-8">
			<p className="text-2xl md:text-3xl text-center">
				With <span className="text-[#2563eb]"> Hyko </span> AI is chocolate 🍫
			</p>
			<Particles
				className="absolute inset-0"
				quantity={400}
				staticity={10}
				ease={40}
				color="#2563eb"
				refresh
			/>
		</div>
	);
}
