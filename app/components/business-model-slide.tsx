import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function BusinessModel() {
  const data = [
    { year: 2025, arr: 3049200.0, valuation: 60984000.0, exitValue: 6098400.0 },
    {
      year: 2026,
      arr: 9338400.0,
      valuation: 186768000.0,
      exitValue: 18676800.0,
    },
    {
      year: 2027,
      arr: 17787600.0,
      valuation: 355752000.0,
      exitValue: 35575200.0,
    },
    {
      year: 2028,
      arr: 28728000.0,
      valuation: 574560000.0,
      exitValue: 57456000.0,
    },
  ];

  return (
    <div className=" flex justify-center items-center h-full">
      <div className="w-fit  flex col justify-center items-stretch gap-y-4">
        <div className="flex flex-col justify-between gap-y-6 px-[5%] text-center items-center w-[50%]">
          <p className="text-5xl leading-snug">
            <span className="font-bold text-blue-600">SaaS</span> with two kinds
            of licenses
          </p>
          <div className="flex justify-center items-center gap-x-4">
            <Card className="p-4 flex flex-col justify-center items-center gap-y-6 w-[50%]">
              <p className="text-3xl font-semibold">
                Do it you're self License
              </p>
              <h3 className="text-blue-600 text-5xl font-bold">€49 </h3>
              <span className="text-2xl font-bold text-black">Per Month</span>
            </Card>
            <Card className="p-4 flex flex-col justify-center items-center gap-y-6 w-[50%]">
              <p className="text-3xl font-semibold">Custom License</p>
              <h3 className="text-blue-600 text-5xl font-bold">€1,000 </h3>
              <span className="text-2xl font-bold text-black">Per Month</span>
            </Card>
          </div>
        </div>
        <div className="w-[50%] gap-y-6 flex flex-col justify-center items-center px-4">
          <h2 className="text-5xl text-center mx-4 leading-snug">
            <span className="font-bold text-blue-600">ARR</span> Hyko : Mini ARR{" "}
            <span className="font-bold text-blue-600">2025 - 2028</span>
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center font-bold">Year</TableHead>
                  <TableHead className="text-center font-bold">ARR</TableHead>
                  <TableHead className="text-center font-bold">
                    Valuation (*20 ARR)
                  </TableHead>
                  <TableHead className="text-center font-bold">
                    Exit Value (Invest 10%)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.year}>
                    <TableCell className="text-center font-medium">
                      ARR {row.year}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.arr.toLocaleString("en-US", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.valuation.toLocaleString("en-US", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.exitValue.toLocaleString("en-US", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
