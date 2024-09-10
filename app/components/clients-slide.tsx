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
    <div className="flex  w-full flex-col items-center justify-center text-blue-600 max-h-[75vh] h-full sm:max-h-[80vh]  px-4 ">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        Our clients are Happy !
      </h2>
      <ScrollArea className="w-[90vw]">
        <div className="flex w-screen overflow-x-scroll gap-3">
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
      </ScrollArea>
    </div >
  );
}
