import { Card } from "@/components/ui/card";

const features = [
  {
    feature: "/connect.gif",
    gif: "Connect nodes",
  },
  {
    feature: "/loop_mode.gif",
    gif: "parallel workflows",
  },
  {
    feature: "/features/upload-your-files.gif",
    gif: "Share simple UI",
  },
  {
    feature: "/appbook.gif",
    gif: "Cache results",
  },
  {
    feature: "/features/cache.gif",
    gif: "Upload your files",
  },
  {
    feature: "/features/connect-your-apps.gif",
    gif: "Connect your apps",
  },
];

export function Features() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="grid grid-cols-3 gap-4 h-full ">
        {features.map((feature) => (
          <Card
            className="relative flex flex-col justify-center items-center gap-x-2 p-2"
            key={feature.gif}
          >
            <img
              key={feature.gif}
              src={feature.feature}
              alt={feature.feature}
            />
            <p className="absolute bottom-1 text-lg font-semibold">
              {feature.feature}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
