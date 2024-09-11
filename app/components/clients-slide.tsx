import { ScrollArea } from "@/components/ui/scroll-area";

export function ClientsSlide() {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];
  return (
    <div className="flex  w-full flex-col items-center justify-center text-blue-600 max-h-[75vh] h-full sm:max-h-[80vh]  px-4">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Traction:
      </h2>
      <p className="text-xl sm:text-2xl mb-8">
        Our happy clients / beta users:
      </p>
      <ScrollArea >
        <div className="w-[90vw] flex flex-col gap-5">
          <div className="flex w-[90vw] overflow-x-auto gap-3">
            {videoIds.map((id) => (
              <iframe
                key={id}
                className="min-h-52 min-w-80 sm:min-w-80 sm:min-h-64"
                src={`https://www.youtube.com/embed/${id}`}
                title="client youtube video"
                allowFullScreen
              />
            ))}
          </div>
          <a href="mailto:hk@big-mama.io" className="self-start text-blue-600 text-lg ">Contact: Hk@big-mama.io</a>
        </div>
      </ScrollArea>

    </div >
  );
}
