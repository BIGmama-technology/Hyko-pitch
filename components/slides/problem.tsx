const problems = [
  {
    text: "People cannot formulate their problems clearly in few words.",
    icon: "🗨️",
  },
  {
    text: "It's hard to articulate a technical solution for a problem.",
    icon: "🧩",
  },
  {
    text: "It's difficult to materialize and share the solution.",
    icon: "📤",
  },
  {
    text: "Implementing and integrating solutions often faces unforeseen obstacles.",
    icon: "🚧",
  },
];

export function Problem() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-y-4 lg:gap-y-8   text-center px-4 ">
      <ul className="text-xl  sm:text-2xl space-y-3 lg:space-y-5 lg:max-w-3xl w-full ">
        {problems.map((problem) => (
          <SingleProblem problem={problem} />
        ))}
      </ul>
    </div>
  );
}

const SingleProblem = ({ problem }: { problem: any }) => {
  return (
    <li className="relative min-h-fit overflow-hidden rounded-2xl p-4 w-full bg-white border shadow-md">
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 p-2 items-center justify-center rounded-2xl bg-blue-600">
          <span className="text-lg">{problem.icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm text-start font-normal lg:text-lg dark:text-white/60">
            {problem.text}
          </p>
        </div>
      </div>
    </li>
  );
};
