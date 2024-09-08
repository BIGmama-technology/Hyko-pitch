import IconCloud from "./IconCloud";

const slugs = [
  "googledocs",
  "googlesheets",
  "airtable",
  "github",
  "gmail",
  "notion",
  "openai",
  "anthropic",
  "google",
  "googlegemini",
  "googledrive",
  "youtube",
  "x",
  "arxiv",
  "cohere",
  "gemini",
  "wikipedia",
  "stabilityai",
  "sheets",
];
export function SolutionSlide() {

  return (<div className="grid place-items-center items-center py-16 sm:py-32  text-blue-600 p-8">
    <h2 className="text-2xl sm:text-4xl font-bold mb-8">Hyko.ai</h2>
    <ul className="text-xl sm:text-2xl space-y-6 max-w-6xl mx-auto text-left">
      <li>🧩 Drag and drop AI models/third-party action as nodes</li>
      <li>🔗 Configure the nodes and connect them to build blueprints</li>
      <li>⚡ Run/Share your blueprints from Editor/UI/API</li>
    </ul>
    <IconCloud iconSlugs={slugs} />
  </div>
  )
}
