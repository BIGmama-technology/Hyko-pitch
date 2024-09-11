export function HykoSlide() {
  const gifs = ["/connect.gif", "/loop_mode.gif", "/appbook.gif"];
  const descriptions = [
    "Connect nodes",
    "Advanced features",
    "Share simple UI",
  ];
  return (
    <div className="max-h-[75vh] sm:max-h-[80vh]  h-full px-4 mx-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 text-blue-600">
        Our features in action
      </h2>
      <div className="grid justify-center justify-items-start items-stretch md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-3 overflow-y-auto">
        {gifs.map((gif, idx) => (
          <div className="max-w-60 sm:max-w-sm object-contain" key={gif}>
            <p className="text-xl sm:text-2xl py-2 text-blue-600">
              {descriptions[idx]}
            </p>
            <img key={gif} src={gif} alt={descriptions[idx]} />
          </div>
        ))}
      </div>
    </div>
  );
}
