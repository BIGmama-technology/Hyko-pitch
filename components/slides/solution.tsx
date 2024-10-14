const solutions = [
  ,
  {
    text: "Drag and drop AI models / third-party action as nodes",
    icon: "🧠",
  },
  {
    text: "Configure the nodes and connect them to build blueprints / agents",
    icon: "🔧",
  },
  {
    text: "Run / Share your blueprints from Editor / UI / API",
    icon: "🚀",
  },
  {
    text: "Monitor and analyze performance of your blueprints",
    icon: "📊",
  },
];

export function Solution() {
  return (
    <div className="flex flex-col justify-center h-full text-center items-center max-w-3xl mx-auto">
      <ul className="text-xl  sm:text-2xl space-y-3 lg:space-y-5 w-full ">
        {solutions.map((solution) => (
          <SingleSolution solution={solution} />
        ))}
      </ul>
    </div>
  );
}

const SingleSolution = ({ solution }: { solution: any }) => {
  return (
    <li className="relative min-h-fit overflow-hidden rounded-2xl p-4 w-full bg-white border shadow-md">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: "#3884ff",
          }}
        >
          <span className="text-lg">{solution.icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm text-start font-normal lg:text-lg dark:text-white/60">
            {solution.text}
          </p>
        </div>
      </div>
    </li>
  );
};
