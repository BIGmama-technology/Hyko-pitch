import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"

export function BusinessModel() {
  return <div className="flex w-full h-full flex-col items-center  overflow-y-scroll  text-blue-600 justify-center px-4 max-h-[75vh] sm:max-h-[80vh]">
    <h2 className="text-2xl sm:text-3xl font-bold  text-center">
      Our Business Model:
    </h2>
    <Separator className='h-[1px] bg-[#B0C4DE] w-full mt-4' />
    <div className="mt-6">
      <h2 className="text-xl sm:text-3xl font-bold   text-center">
        SaaS with two kinds of licenses
      </h2>
    </div>

    <div className="grid grid-cols-2 w-full my-2  sm:mb-6   justify-between">
      <div>
        <div className="flex justify-center my-2">
          <img src='/down-left-arrow.svg' width={32} height={32} alt='down left arrow' />
        </div>
        <h2 className="text-xl sm:text-3xl font-bold   text-center">
          Do it yourself license:       </h2>
        <p className="text-xl sm:text-2xl text-center  textblue-500 "> €49</p>
      </div>
      <div >
        <div className="flex justify-center my-2">
          <img src='/down-right-arrow.svg' width={32} height={32} alt='down right arrow' />
        </div>
        <h2 className="text-xl sm:text-3xl font-bold  mx-auto  text-center">
          Custom license:
        </h2>
        <p className="text-xl sm:text-2xl text-center mx-auto textblue-500 max-w-md">  €1,000</p>
      </div>
    </div>
    <a
      target="_blank"
      href='https://docs.google.com/spreadsheets/d/1edTf-pW4zc2g7-5oyrUIL1NiFsRkD5R0OemxzRUdtGQ/edit?usp=sharing' className="flex gap-2 items-center justify-center  text-xl sm:text-3xl font-bold   text-center mb-4 ">
      <span>
        Our figures
      </span>
      <ExternalLink className="size-8" />
    </a>
    <div className="flex  justify-center w-[90vw] h-96 overflow-y-auto">
      <iframe className="min-h-96 max-w-fit px-4 w-[90%]"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTWHXm34G4gfyMAziQhydAGy2ruqnK5yzXy107WfwXGf3utRSVFaeZeMZr3wnTJliQtvZ3axOi8zTob/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>

  </div>
}
