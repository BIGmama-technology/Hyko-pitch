import { Card } from "@/components/ui/card";
import Image from "next/image";

const prevClients = [
  {
    name: "Arkea",
    logo: "/clients/arkea.png",
  },
  {
    name: "Kwanko",
    logo: "/clients/kwanko.png",
  },

  {
    name: "Ratp",
    logo: "/clients/ratp.png",
  },
  {
    name: "Total",
    logo: "/clients/total.png",
  },
  {
    name: "sonatrach",
    logo: "/clients/sonatrach.png",
  },
  {
    name: "Ooredoo",
    logo: "/clients/ooredoo.png",
  },
  {
    name: "Ooredoo",
    logo: "/clients/ooredoo.png",
  },
  {
    name: "Yourscrib",
    logo: "/clients/yourscrib.png",
  },
];

export default function WhoAreWe() {
  return (
    <article className="flex flex-col lg:flex-row bg-black gap-y-4 justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center text-center gap-y-10 px-[5%]">
        <h2 className="text-2xl lg:text-4xl">
          We have been crafting custom{" "}
          <span className="font-bold text-blue-600">AI agents</span> for over a{" "}
          <span className="font-bold text-blue-600">decade</span>
        </h2>
        <p className="text-normal lg:text-2xl">
          We've made it possible for non-technical users to effortlessly build
          their own AI agents using Hyko.ai!
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {prevClients.map((client) => (
          <Card className="p-2 lg:p-4 flex flex-col justify-center items-center gap-2 shadow-md">
            <Image
              src={client.logo}
              alt={client.name}
              width={140}
              height={120}
            />
            {client.name !== "Yourscrib" ? (
              <h3 className="font-semibold text-normal lg:text-xl">
                {client.name}
              </h3>
            ) : null}
          </Card>
        ))}
      </div>
    </article>
  );
}
