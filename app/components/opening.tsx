import Image from "next/image";

export function Opening() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Image
        src="/intro.png"
        alt="good image"
        width={1280}
        height={600}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
