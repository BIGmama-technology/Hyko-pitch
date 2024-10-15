const videoIds = [
  "CUG6XbjJWkk",
  "DQaMYdOazIQ",
  "LLipFlFK2SI",
  "TDl9jK093sE",
  "e2OtBpoe2kE",
  "fKS_076y8u8",
  "f6CMQ6GuFTo",
];

export function HappyClients() {
  return (
    <div className="w-fit h-screen lg:h-fit mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-4  justify-center items-center">
      {videoIds.map((id) => (
        <iframe
          key={id}
          className="border rounded-md aspect-video"
          src={`https://www.youtube.com/embed/${id}`}
          title="client youtube video"
          allowFullScreen
        />
      ))}
    </div>
  );
}
