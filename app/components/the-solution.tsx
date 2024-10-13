import IconCloud from "./IconCloud";

const slugs = [
  "googledocs",
  "googlesheets",
  "airtable",
  "github",
  "sheets",
  "gmail",
  "wikipedia",
  "stabilityai",
  "notion",
  "googledocs",
  "openai",
  "anthropic",
  "google",
  "googlegemini",
  "googledrive",
  "gmail",
  "youtube",
  "x",
  "notion",
  "arxiv",
  "cohere",
  "gemini",
  "wikipedia",
  "stabilityai",
  "sheets",
  "googlegemini",
];

const solutions = [
  {
    text: "Drag and drop AI models/third-party action as nodes",
    icon: "🧩",
  },
  {
    text: "Configure the nodes and connect them to build blueprints / agents",
    icon: "🔗",
  },
  {
    text: "Run/Share your blueprints from Editor/UI/API",
    icon: "⚡",
  },
];

export function Solution() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full text-center gap-x-8">
      <div className="flex flex-col justify-start text-center items-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 w-full">Hyko.ai</h2>
        <ul className="text-xl  sm:text-2xl space-y-3 lg:space-y-5 w-full ">
          {solutions.map((solution) => (
            <SingleSolution solution={solution} />
          ))}
        </ul>
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

const SingleSolution = ({ solution }: { solution: any }) => {
  return (
    <li className="relative min-h-fit overflow-hidden rounded-2xl p-4 w-full bg-white shadow-lg">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: "#0000ff",
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
