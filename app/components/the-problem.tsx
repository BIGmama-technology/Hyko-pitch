const problems = [
  {
    text: "People cannot formulate their problems clearly in few words.",
    icon: "👥 ",
  },
  {
    text: "It's hard to articulate a technical solution for a problem.",
    icon: "🔧 ",
  },
  {
    text: "It's difficulte to materilize and share the solution.",
    icon: "🔗",
  },
];
export function Problem() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center  text-center px-4 ">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-8">
        What did we learn from 10 years in the ground field ?
      </h2>
      <ul className="text-xl  sm:text-2xl space-y-3 lg:space-y-5 lg:max-w-3xl w-full ">
        {problems.map((problem) => (
          <SingleProblem problem={problem} />
        ))}
      </ul>

      <p className="font-medium text-xl  lg:text-3xl py-12 flex gap-2">
        <img src="/logo.svg" alt="hyko.ai" /> Our solution: Hyko.ai
      </p>
    </div>
  );
}

const SingleProblem = ({ problem }: { problem: any }) => {
  return (
    <li className="relative min-h-fit overflow-hidden rounded-2xl p-4 w-full bg-white shadow-lg">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: "#0000ff",
          }}
        >
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
