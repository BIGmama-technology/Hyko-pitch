import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import { teamContent, teamContentMobile } from "./constants";

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

  const mobileOptions = {
    size: 150,
    minSize: 10,
    gutter: 13,
    provideProps: true,
    numCols: 3,
    fringeWidth: 400,
    yRadius: 250,
    xRadius: 150,
    cornerRadius: 0,
    showGuides: false,
    compact: true,
    gravitation: 10,
  };

  const childrenMobile = teamContentMobile.map((data, i) => {
    return <Child member={data} key={i} />;
  });

  const children = teamContent.map((data, i) => {
    return <Child member={data} key={i} />;
  });

  return (
    <div className="flex w-full h-full flex-col items-center justify-center ">
      <BubbleUI
        options={mobileOptions}
        className="w-full my-auto max-w-[680px] lg:w-0 lg:absolute h-full lg:h-[750px] rounded-full"
      >
        {childrenMobile}
      </BubbleUI>
      <BubbleUI
        options={options}
        className="w-0 absolute lg:w-full lg:flex my-auto lg:max-w-[1280px] h-full lg:h-[750px] rounded-full"
      >
        {children}
      </BubbleUI>
    </div>
  );
}

const Child = ({ member }: { member: any }) => {
  if (member.image === undefined) {
    return (
      <div
        className="w-full  bg-blue-400 group  relative overflow-hidden rounded-full h-full shadow-2xl"
        key={member.fullname.toLowerCase().replace(" ", "-")}
      ></div>
    );
  }
  return (
    <div
      className="w-full p-1 bg-blue-500 group  relative overflow-hidden rounded-full h-full shadow-2xl"
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

      {member.coreTeam ? (
        <BorderBeam
          className="z-99999"
          size={250}
          duration={12}
          delay={Math.round(Math.random() * 10)}
        />
      ) : null}
    </div>
  );
};
