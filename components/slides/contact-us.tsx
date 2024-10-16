import Link from "next/link";
import Particles from "../ui/particles";

export function ContactUs() {
  return (
    <div className="w-full h-screen rounded-md overflow-hidden flex justify-center items-center flex-col gap-y-8">
      <h1 className="text-4xl">Contact us</h1>
      <Link
        href="mail-to:support@hyko.ai"
        className="text-blue-600 text-lg underline"
      >
        support@hyko.ai
      </Link>
      <Particles
        className="absolute inset-0"
        quantity={400}
        ease={80}
        color="#000"
        refresh
      />
    </div>
  );
}
