import Image from "next/image";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import { teamContent } from "./constants";

export function Team() {
  const options = {
    size: 250,
    minSize: 20,
    gutter: 13,
    provideProps: true,
    numCols: 5,
    fringeWidth: 400,
    yRadius: 200,
    xRadius: 250,
    cornerRadius: 0,
    showGuides: false,
    compact: true,
    gravitation: 10,
  };

  const children = teamContent.map((data, i) => {
    return <Child member={data} key={i} />;
  });

  return (
    <BubbleUI
      options={options}
      className="w-full max-w-[1280px] h-[800px] rounded-full"
    >
      {children}
    </BubbleUI>
  );
}

const Child = ({ member }: { member: any }) => {
  if (member.image === undefined) {
    return (
      <div
        className="w-full bg-blue-500 group  relative overflow-hidden rounded-[50%] h-full shadow-2xl"
        key={member.fullname.toLowerCase().replace(" ", "-")}
      />
    );
  }
  return (
    <div
      className="w-full bg-blue-500 group  relative overflow-hidden rounded-[50%] h-full shadow-2xl"
      key={member.fullname.toLowerCase().replace(" ", "-")}
    >
      <Image
        alt={member.fullname}
        className="transition-transform duration-200 w-full h-full"
        src={member.image}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-black opacity-60 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center gap-4 p-4 text-white transition-opacity duration-200 group-hover:opacity-100 opacity-0">
        <div className="flex flex-col justify-center items-center gap-y-2">
          <h2 className="text-lg  text-center font-semibold">
            {member.fullname}
          </h2>
          <h3 className="text-sm text-center">{member.role}</h3>
        </div>
      </div>
    </div>
  );
};
