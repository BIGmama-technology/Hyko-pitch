import Image from "next/image";
import { boardMembers, teamContent } from "./constants";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function Team() {
  return <div className='w-full flex flex-col jutems-center items-center max-h-[75vh] sm:max-h-[80vh]   text-blue-600 px-4'>
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Who are we ?</h2>
    <div className="overflow-y-auto">

      <a href="mailto:hk@big-mama.io" className="self-start text-blue-600 text-lg ">Contact: Hk@big-mama.io</a>
      <p className="text-xl sm:text-2xl my-2">
        Team members
      </p>
      <ScrollArea >
        <div className="w-[90vw]">
          <div className="flex w-[90vw] gap-3  overflow-x-auto">
            {teamContent.map(member => (
              <div
                className='group relative min-h-[180px] min-w-[200px] rounded-md border transition-all hover:grayscale-0 lg:grayscale'
                key={member.fullname.toLowerCase().replace(' ', '-')}
              >
                <div className='absolute z-10 h-full w-full bg-gradient-to-b from-transparent to-black group-hover:block lg:hidden' />
                <Image
                  alt={member.fullname}
                  className='rounded-md'
                  src={member.image}
                  fill
                />
                <div className='absolute left-0 top-0 z-20 flex h-full w-full items-end justify-between gap-1 p-4 text-base transition-all duration-200 group-hover:opacity-100 lg:opacity-0'>
                  <div className='flex flex-col justify-start text-white'>
                    <h2 className='font-medium'>{member.fullname}</h2>
                    <h3 className="text-sm">{member.role}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
      <p className="text-xl sm:text-2xl my-2">
        Board members
      </p>
      <ScrollArea>
        <div className="flex   gap-3 ">
          {boardMembers.map(member => (
            <div
              className='group relative h-[180px] w-[200px] rounded-md border transition-all hover:grayscale-0 lg:grayscale'
              key={member.fullname.toLowerCase().replace(' ', '-')}
            >
              <div className='absolute  z-10 h-full w-full bg-gradient-to-b from-transparent to-black group-hover:block lg:hidden' />
              <Image
                alt={member.fullname}
                className='rounded-md'
                src={member.image}
                fill
              />
              <div className='absolute left-0 top-0 z-20 flex h-full w-full items-end justify-between gap-1 p-4 text-base transition-all duration-200 group-hover:opacity-100 lg:opacity-0'>
                <div className='flex flex-col justify-start text-white'>
                  <h2 className='font-medium'>{member.fullname}</h2>
                  <h3 className="text-sm">{member.role}</h3>
                </div>
              </div>
            </div>))}
        </div>
      </ScrollArea>
    </div>
  </div>
} 
