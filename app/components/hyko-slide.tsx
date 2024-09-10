export function HykoSlide() {
  const gifs = ["/connect.gif", "/loop_mode.gif", "/appbook.gif", "/connect.gif", "/connect.gif", "/connect.gif"];
  const descriptions = [
    "Connect nodes",
    "Advanced features",
    "Share simple UI",

    "Share simple UI",

    "Share simple UI",

    "Share simple UI",
  ];
  return (
    <div className="grid justify-center justify-items-center items-center md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-3  max-h-[75vh] sm:max-h-[80vh] overflow-y-scroll sm:overflow-y-hidden px-4">
      {gifs.map((gif, idx) => (
        <div className="max-w-60 sm:max-w-sm object-contain" key={gif}>
          <p className="text-xl sm:text-2xl py-2 text-blue-600">{descriptions[idx]}</p>
          <img
            src={gif}
          />
        </div>
      ))}
    </div>
  );
}
