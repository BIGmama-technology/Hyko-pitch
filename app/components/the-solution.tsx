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
export function Solution() {
  return (
    <div className="flex items-center justify-center h-full w-full text-center">
      <div className="flex flex-col justify-start text-start items-center w-2/3">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 w-full">Hyko.ai</h2>
        <ul className="text-xl  sm:text-2xl md:space-y-6 md:max-w-6xl w-full ">
          <li>🧩 Drag and drop AI models/third-party action as nodes</li>
          <li>
            🔗 Configure the nodes and connect them to build blueprints / agents
          </li>
          <li>⚡ Run/Share your blueprints from Editor/UI/API</li>
        </ul>
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
