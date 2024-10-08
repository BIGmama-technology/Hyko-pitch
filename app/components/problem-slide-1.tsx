export function ProblemSlide1() {
	return (
		<div className="flex w-full h-full flex-col items-center justify-center text-center text-blue-600 px-4 mx-auto">
			<h2 className="text-2xl sm:text-4xl font-bold mb-6">
				What did we learn from 10 years in the ground field?
			</h2>
			<p className="font-medium text-2xl mb-4">
				Agents are the future of AI: why ? It's major player's point of view{" "}
				<a
					className="text-lg md:text-xl underline"
					href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/why-agents-are-the-next-frontier-of-generative-ai?stcr=AF6B9CB453764286AF46902E388F0540&cid=other-eml-alt-mip-mck&hlkid=7fd5040f72544d80b7ed7a367130646e&hctky=14813738&hdpid=62a61fa0-2d7d-4f20-997f-b7375d5d1f4c"
				>
					McKinsey's insights
				</a>
			</p>
			<p className="text-lg md:text-xl mb-4">
				Since agents offer a solution to the biggest AI issues, Agents make AI:
			</p>
			<ul className="text-lg md:text-xl space-y-2 list-disc text-left mb-6">
				<li>Affordable</li>
				<li>Explainable</li>
				<li>Feasible</li>
				<li>Sharable</li>
				<li>Useful</li>
			</ul>
		</div>
	);
}
