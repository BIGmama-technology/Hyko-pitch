const videoIds = [
  "f6CMQ6GuFTo",
  "CUG6XbjJWkk",
  "LLipFlFK2SI",
  "TDl9jK093sE",
  "e2OtBpoe2kE",
  "fKS_076y8u8",

  "DQaMYdOazIQ",
];

export function HappyClients() {
  return (
    <div className="w-full py-8 h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl my-4 lg:my-8 lg:text-4xl leading-relaxed">
        Our happy clients / users
      </h1>
      <div className="w-full lg:w-fit h-full lg:h-fit mx-auto -z-10 grid grid-cols-1 lg:grid-cols-3 gap-4  justify-center items-center">
        {videoIds.map((id) => (
          <iframe
            key={id}
            className="border rounded-md w-full lg:aspect-video"
            src={`https://www.youtube.com/embed/${id}`}
            title="client youtube video"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
}
