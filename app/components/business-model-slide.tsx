import { Separator } from "@/components/ui/separator"

export function BusinessModel() {
  return <div className="flex w-full h-full flex-col items-center  overflow-y-scroll  text-blue-600 justify-center px-4 max-h-[75vh] sm:max-h-[80vh]">
    <h2 className="text-2xl sm:text-3xl font-bold  text-center">
      Our Business Model:
    </h2>
    <Separator className="w-full h-[4px] my-2" />
    <div className="mt-8">
      <h2 className="text-xl sm:text-3xl font-bold   text-center">
        SaaS with two kinds of licenses
      </h2>
    </div>

    <div className="grid grid-cols-2 w-full my-4  sm:mb-6   justify-between">
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
    <h2 className="text-xl sm:text-3xl font-bold   text-center mb-2">
      Our figures
    </h2>
    <div className="flex  justify-center w-[90vw] h-96 overflow-y-auto">
      <iframe className="min-h-96 w-[90%]"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_4gbWduXx0DtCVEcNXFy420fFs6KDuk3nonM_fb0EuEJNjhXKQK9Rbbl4PX6Fg6IjIVs_7hAQFGlm/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>

  </div>
}
