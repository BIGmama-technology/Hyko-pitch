import Image from "next/image";

export function Opening() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Image
        src="/intro.png"
        alt="good image"
        width={1280}
        height={600}
        className="hidden lg:block"
        style={{ objectFit: "contain" }}
      />
      <Image
        src="/intro-mobile.png"
        alt="good image"
        width={560}
        height={300}
        className="lg:hidden"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
