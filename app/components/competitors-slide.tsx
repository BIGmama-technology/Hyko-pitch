import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Competitors() {
  const columns = [
    { label: "Feature" },
    { label: "Hyko" },
    { label: "Gumloop" },
    { label: "Zapier" },
    { label: "Make" },
    { label: "8n8" },
  ];

  const data = [
    {
      feature: "3rd parties integrations",
      hyko: "✅",
      gumloop: "✅",
      zapier: "✅",
      make: "❌",
      "8n8": "✅",
    },
    {
      feature: "Automation versionning",
      hyko: "✅",
      gumloop: "✅",
      zapier: "✅",
      make: "❌",
      "8n8": "✅",
    },
    {
      feature: "AI Native Integrations",
      hyko: "✅",
      gumloop: "❌",
      zapier: "✅",
      make: "❌",
      "8n8": "✅",
    },
    {
      feature: "Interactive steps",
      hyko: "✅",
      gumloop: "❌",
      zapier: "✅",
      make: "❌",
      "8n8": "✅",
    },
    {
      feature: "Appbook",
      hyko: "✅",
      gumloop: "✅",
      zapier: "❌",
      make: "❌",
      "8n8": "✅",
    },
    {
      feature: "Export automation",
      hyko: "✅",
      gumloop: "✅",
      zapier: "❌",
      make: "✅",
      "8n8": "❌",
    },
    {
      feature: "Loop mode",
      hyko: "✅",
      gumloop: "❌",
      zapier: "❌",
      make: "✅",
      "8n8": "❌",
    },
    {
      feature: "Result caching",
      hyko: "✅",
      gumloop: "❌",
      zapier: "❌",
      make: "✅",
      "8n8": "❌",
    },
    {
      feature: "Minimal configuration",
      hyko: "✅",
      gumloop: "❌",
      zapier: "❌",
      make: "❌",
      "8n8": "❌",
    },
    {
      feature: "Files support (video, pdf...)",
      hyko: "❌",
      gumloop: "❌",
      zapier: "❌",
      make: "❌",
      "8n8": "❌",
    },
    {
      feature: "AI Assistant",
      hyko: "✅ beta",
      gumloop: "❌",
      zapier: "❌",
      make: "❌",
      "8n8": "❌",
    },
  ];

  return (
    <div className=" flex justify-center items-center h-full">
      <div className="w-fit  flex col justify-center items-center gap-y-4">
        <div className="flex flex-col justify-between gap-y-6 px-[5%] text-center items-center w-[40%]">
          <p className="text-5xl">
            {" "}
            <span className="font-bold text-red-600">Complex</span> AI
            Automatons,{" "}
            <span className="font-bold text-blue-600">Simplified</span> With{" "}
            <span className="font-bold text-blue-600">Hyko</span>
          </p>
          <p className="text-xl">
            We outperform our competitors in terms of the complexity we can
            handle: More complex usecases accessible to less technical profiles
          </p>
        </div>

        <div className="border rounded-lg w-[60%]">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead className="text-center font-bold" key={col.label}>
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-bold text-center">
                    {row.feature}
                  </TableCell>
                  <TableCell className="text-center">{row.hyko}</TableCell>
                  <TableCell className="text-center">{row.gumloop}</TableCell>
                  <TableCell className="text-center">{row.zapier}</TableCell>
                  <TableCell className="text-center">{row.make}</TableCell>
                  <TableCell className="text-center">{row["8n8"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
