export function ClientsSlide() {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center text-blue-600 max-h-[80vh]  px-4 overflow-y-scroll">
      <h2 className="text-4xl font-bold mb-2 sm:mb-8">Our clients are Happy !</h2>
      <div className="grid justify-center justify-items-center items-center md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-3 overflow-y-scroll">
        {videoIds.map((id) => (
          <iframe
            key={id}
            className="aspect-[9_/_16]"
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  )
}
