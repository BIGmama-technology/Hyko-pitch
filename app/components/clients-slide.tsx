export function ClientsSlide() {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center text-blue-600 max-h-[75vh] sm:max-h-[80vh]  px-4 ">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">Our clients are Happy !</h2>
      <div className="grid justify-center justify-items-center items-center lg:grid-cols-3 md:grid-cols-2  grid-col-1 gap-3 overflow-y-scroll md:overflow-y-hidden ">
        {videoIds.map((id) => (
          <iframe
            key={id}
            className="min-h-52 sm:min-h-64 "
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  )
}
