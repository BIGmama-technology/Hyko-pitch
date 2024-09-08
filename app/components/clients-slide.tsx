export function ClientsSlide() {
  const videoIds = [
    "CUG6XbjJWkk",
    "DQaMYdOazIQ",
    "LLipFlFK2SI",
    "TDl9jK093sE",
    "e2OtBpoe2kE",
  ];
  return (
    <div className="flex flex-col items-center justify-center text-blue-600">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2 sm:mb-8">Our clients are Happy !</h2>
        <div className="flex flex-wrap gap-2 sm:gap-6">
          {videoIds.map((id, index) => (
            <iframe
              key={index}
              className="aspect-w-16 aspect-h-9"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  )
}
