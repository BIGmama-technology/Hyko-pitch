import { Card } from "@/components/ui/card";

const features = [
  {
    gif: "/connect.gif",
    name: "Connect nodes",
  },
  {
    gif: "/loop_mode.gif",
    name: "parallel workflows",
  },
  {
    gif: "/features/upload-your-files.gif",
    name: "Share simple UI",
  },
  {
    gif: "/appbook.gif",
    name: "Cache results",
  },
  {
    gif: "/features/cache.gif",
    name: "Upload your files",
  },
  {
    gif: "/features/connect-your-apps.gif",
    name: "Connect your apps",
  },
];

export function Features() {
  return (
    <div className="w-full grid grid-cols-1  lg:grid-cols-3 gap-4 h-full ">
      {features.map((feature) => (
        <Card
          className="relative flex flex-col justify-center items-center gap-x-2 p-2 shadow-md"
          key={feature.gif}
        >
          <p className="absolute top-2 text-lg font-semibold">{feature.name}</p>

          <img key={feature.gif} src={feature.gif} alt={feature.name} />
        </Card>
      ))}
    </div>
  );
}
