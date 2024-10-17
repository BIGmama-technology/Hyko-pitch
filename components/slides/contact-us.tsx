import Link from "next/link";
import Particles from "../ui/particles";

export function ContactUs() {
	return (
		<div className="w-full h-screen rounded-md overflow-hidden flex justify-center items-center flex-col gap-y-8">
			<h1 className="text-4xl">Get in touch 👋</h1>
			<Link
				href="mail-to:contact@big-mama.io"
				className="text-blue-600 text-lg underline"
			>
				contact@big-mama.io
			</Link>
			<Particles
				className="absolute inset-0"
				quantity={400}
				ease={80}
				color="#2563eb"
				refresh
			/>
		</div>
	);
}
