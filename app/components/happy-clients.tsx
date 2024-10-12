export function HappyClients() {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];
  return (
    <div className="flex w-full flex-col h-full justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
        {videoIds.map((id) => (
          <iframe
            key={id}
            className="border rounded-md w-[240px] h-[135px] sm:w-[320px] sm:h-[180px] md:w-[400px] md:h-[225px]"
            src={`https://www.youtube.com/embed/${id}`}
            title="client youtube video"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
}
