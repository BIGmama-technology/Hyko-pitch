import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/team";
import Image from "next/image";

const teamContent: TeamMember[] = [
	{
		coreTeam: true,
		fullName: "Samir Cheraft",
		role: "Office Manager",
		image: "/team/samir.png",
	},

	{
		coreTeam: true,
		fullName: "Hadj Khelil",
		role: "CEO and founder of BIGmama",
		image: "/team/hadj.png",
	},
	{
		coreTeam: true,
		fullName: "Hachem Betrouni",
		role: "CTO",
		image: "/team/hachem.png",
	},

	{
		coreTeam: true,
		fullName: "Darine Tag",
		role: "Product Designer ",
		image: "/team/darine.jpg",
	},

	{
		coreTeam: true,
		fullName: "Louai Boumediene",
		role: "Backend Developer",
		image: "/team/louai.png",
	},
	{
		coreTeam: true,
		fullName: "Anfal Yousra BOUCETTA",
		role: "Software Engineer",
		image: "/team/yousra.png",
	},
	{
		fullName: "Mahdi KALLEL",
		role: "Scientific Advisor",
		image: "/team/mahdi.png",
	},
	{
		fullName: "Abderrahmane Hadj-Nacer",
		role: "Strategic Advisor",
		image: "/team/hadj-nacer.png",
	},
	{
		fullName: "Jacques VINCENT",
		role: "Share holder",
		image: "/team/jaques-vincent.png",
	},
	{
		fullName: "J-P HERTEMAN",
		role: "Share holder",
		image: "/team/j-p-herteman.png",
	},
	{
		fullName: "Edgar MORIN",
		role: "Share holder",
		image: "/team/edgar-morin.png",
	},
];

const TeamCard = (team_member: TeamMember) => {
	return (
		<div
			className={cn(
				"relative cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
			)}
		>
			{team_member.coreTeam ? (
				<BorderBeam
					borderWidth={2}
					size={100}
					colorFrom="#9DD4E9"
					colorTo="#E0E893"
					delay={5}
				/>
			) : null}
			<div className="flex flex-row items-center gap-2">
				<Image
					className="rounded-full aspect-square object-cover"
					width={40}
					height={40}
					alt=""
					src={team_member.image}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{team_member.fullName}
					</figcaption>
				</div>
			</div>
			<blockquote className="mt-2 text-sm text-start">
				{team_member.role}
			</blockquote>
		</div>
	);
};

const Team = () => {
	return (
		<div>
			<h1 className="text-2xl mb-4 lg:mb-8 lg:text-4xl leading-relaxed">
				Team behinde Hyko.ai 🏆
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{teamContent.map((member) => (
					<TeamCard key={member.fullName} {...member} />
				))}
			</div>
		</div>
	);
};

export default Team;
