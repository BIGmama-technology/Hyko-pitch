import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"

export function BusinessModel() {
  return <div className="flex w-full h-full flex-col items-center  overflow-y-scroll  text-blue-600 justify-center px-4 max-h-[75vh] sm:max-h-[80vh]">
    <h2 className="text-2xl sm:text-3xl font-bold  text-center">
      Our Business Model(Our worst case scenario):
    </h2>
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
        <p className="text-xl sm:text-2xl text-center  textblue-500 "> €49 per month</p>
      </div>
      <div >
        <div className="flex justify-center my-2">
          <img src='/down-right-arrow.svg' width={32} height={32} alt='down right arrow' />
        </div>
        <h2 className="text-xl sm:text-3xl font-bold  mx-auto  text-center">
          Custom license:
        </h2>
        <p className="text-xl sm:text-2xl text-center mx-auto textblue-500 max-w-md">  €1,000 per month</p>
      </div>
    </div>

    <Separator className='h-[4px] bg-[#B0C4DE] w-full my-4' />
    <a
      target="_blank"
      href='https://docs.google.com/spreadsheets/d/1edTf-pW4zc2g7-5oyrUIL1NiFsRkD5R0OemxzRUdtGQ/edit?usp=sharing' className="flex gap-2 items-center justify-center  text-xl sm:text-3xl font-bold   text-center mb-4 ">
      <span>
        Our figures,
        more details here
      </span>
      <ExternalLink className="size-8" />
    </a>
    <div className="flex flex-col items-center w-[90vw] h-72 sm:h-96 gap-2 overflow-y-auto">
      <iframe className="min-h-72 max-w-fit  px-4 w-[90%]"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_4gbWduXx0DtCVEcNXFy420fFs6KDuk3nonM_fb0EuEJNjhXKQK9Rbbl4PX6Fg6IjIVs_7hAQFGlm/pubhtml?gid=1493678232&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

    </div>
  </div>
}
