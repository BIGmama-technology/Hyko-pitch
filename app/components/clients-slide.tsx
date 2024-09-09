export function ClientsSlide() {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];
  return (
    <div className="flex flex-col items-center justify-center text-blue-600 max-h-[85vh] overflow-y-scroll px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2 sm:mb-8">Our clients are Happy !</h2>
        <div className="grid justify-center justify-items-center items-center md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-3">
          {videoIds.map((id, index) => (
            <iframe
              key={index}
              className="aspect-[16/9]"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  )
}
