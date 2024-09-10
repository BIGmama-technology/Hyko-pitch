import Image from "next/image";
import { teamContent } from "./constants";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

export function Team() {
  return <div className='w-full max-h-[75vh] sm:max-h-[80vh] overflow-y-scroll sm:overflow-y-hidden text-blue-600 px-4'>

    <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center">Who are we ?</h2>
    <div className="grid  grid-cols-1 justify-center  gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {teamContent.map(member => (
        <div
          className='group relative h-[300px] w-full rounded-md border transition-all hover:grayscale-0 lg:grayscale'
          key={member.fullname.toLowerCase().replace(' ', '-')}
        >
          <div className='absolute  z-10 h-full w-full bg-gradient-to-b from-transparent to-black group-hover:block lg:hidden' />
          <Image
            alt={member.fullname}
            className='rounded-md '
            fill
            src={member.image}
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          <div className='absolute left-0 top-0 z-20 flex h-full w-full items-end justify-between gap-1 p-4 text-base transition-all duration-200 group-hover:opacity-100 lg:opacity-0'>
            <div className='flex flex-col justify-start text-white'>
              <h2 className='text-lg font-semibold'>{member.fullname}</h2>
              <h3>{member.role}</h3>
            </div>
            <Link
              className='text-foreground rounded-sm bg-[#203466] p-2 text-white'
              href={member.linkedin}
              target='_blank'
            >
              <LinkedinIcon className='size-4' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
} 
