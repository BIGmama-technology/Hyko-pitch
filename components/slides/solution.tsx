const solutions = [
	{
		text: "Drag and drop AI models and third-party actions as nodes",
		icon: "🧠",
	},
	{
		text: "Configure the nodes and connect them to build AI agents",
		icon: "🔧",
	},
	{
		text: "Run and share your agents",
		icon: "🚀",
	},
];

export function Solution() {
	return (
		<div className="flex flex-col justify-center h-full text-center items-center max-w-3xl mx-auto">
			<h1 className="text-2xl my-4 lg:my-8 lg:text-4xl leading-relaxed">
				Hyko is the solution
			</h1>

			<ul className="text-xl  sm:text-2xl space-y-3 lg:space-y-5 w-full ">
				{solutions.map((solution) => (
					<SingleSolution key={solution.icon} solution={solution} />
				))}
			</ul>
		</div>
	);
}

const SingleSolution = ({
	solution,
}: { solution: { icon: string; text: string } }) => {
	return (
		<li className="relative min-h-fit overflow-hidden rounded-2xl p-4 w-full bg-white border shadow-md">
			<div className="flex flex-row items-center gap-3">
				<div className="flex size-10 p-2 items-center justify-center rounded-2xl bg-blue-600">
					<span className="text-lg">{solution.icon}</span>
				</div>
				<div className="flex flex-col overflow-hidden">
					<p className="text-sm text-start font-normal lg:text-lg dark:text-white/60">
						{solution.text}
					</p>
				</div>
			</div>
		</li>
	);
};
