import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const columns = [
	{ label: "Feature" },
	{ label: "Hyko" },
	{ label: "Gumloop" },
	{ label: "Zapier" },
	{ label: "Make" },
	{ label: "8n8" },
];

const data = [
	{
		feature: "3rd parties integrations",
		hyko: "✅",
		gumloop: "✅",
		zapier: "✅",
		make: "❌",
		"8n8": "✅",
	},
	{
		feature: "Automation versionning",
		hyko: "✅",
		gumloop: "✅",
		zapier: "✅",
		make: "❌",
		"8n8": "✅",
	},
	{
		feature: "Native AI Integrations",
		hyko: "✅",
		gumloop: "✅",
		zapier: "❌",
		make: "❌",
		"8n8": "❌",
	},
	{
		feature: "Interactive steps",
		hyko: "✅",
		gumloop: "❌",
		zapier: "✅",
		make: "❌",
		"8n8": "✅",
	},
	{
		feature: "Appbook",
		hyko: "✅",
		gumloop: "✅",
		zapier: "❌",
		make: "❌",
		"8n8": "✅",
	},
	{
		feature: "Export automation",
		hyko: "✅",
		gumloop: "✅",
		zapier: "❌",
		make: "✅",
		"8n8": "❌",
	},
	{
		feature: "Loop mode",
		hyko: "✅",
		gumloop: "❌",
		zapier: "❌",
		make: "✅",
		"8n8": "❌",
	},
	{
		feature: "Result caching",
		hyko: "✅",
		gumloop: "❌",
		zapier: "❌",
		make: "✅",
		"8n8": "❌",
	},
	{
		feature: "Minimal configuration",
		hyko: "✅",
		gumloop: "❌",
		zapier: "❌",
		make: "❌",
		"8n8": "❌",
	},
	{
		feature: "Files support (video, pdf...)",
		hyko: "✅",
		gumloop: "❌",
		zapier: "❌",
		make: "❌",
		"8n8": "❌",
	},
	{
		feature: "AI builder",
		hyko: "✅ beta",
		gumloop: "❌",
		zapier: "❌",
		make: "❌",
		"8n8": "❌",
	},
];

export function Competitors() {
	return (
		<div className="h-screen flex flex-col lg:flex-row text-xl w-full items-center gap-y-4">
			<div className="flex flex-col justify-between gap-y-6 lg:px-[5%] text-center items-center lg:w-[40%]">
				<p className="text-xl lg:text-4xl">
					We <span className="font-bold text-blue-500">outperform</span> our
					competitors
				</p>
				<p className="text-xl">
					in terms of the complexity we can handle: more complex usecases
					accessible to less technical profiles.
				</p>
			</div>

			<div className="border w-full rounded-lg lg:w-[60%]">
				<Table>
					<TableHeader>
						<TableRow>
							{columns.map((col) => (
								<TableHead className="text-center font-bold" key={col.label}>
									{col.label}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((row, index) => (
							<TableRow key={row.feature}>
								<TableCell className="font-bold text-center">
									{row.feature}
								</TableCell>
								<TableCell className="text-center">{row.hyko}</TableCell>
								<TableCell className="text-center">{row.gumloop}</TableCell>
								<TableCell className="text-center">{row.zapier}</TableCell>
								<TableCell className="text-center">{row.make}</TableCell>
								<TableCell className="text-center">{row["8n8"]}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
