export function BusinessModel() {
  return <div className="flex w-full h-full flex-col items-center overflow-y-scroll  text-blue-600 justify-center px-4">
    <h2 className="text-2xl sm:text-4xl font-bold  text-center">
      Our Business Model:
    </h2>


    <p className="text-xl sm:text-2xl sm:text-center textblue-500 ">Our Figures </p>
    <div className="mt-8">
      <h2 className="text-xl sm:text-4xl font-bold   text-center">
        SaaS with two kinds of licenses
      </h2>
    </div>
    <div className="grid grid-cols-2 w-full my-4  sm:my-10   justify-between">
      <div>
        <div className="flex justify-center my-2">
          <img src='/down-left-arrow.svg' width={32} height={32} alt='down left arrow' />
        </div>
        <h2 className="text-xl sm:text-4xl font-bold   text-center">
          Do it yourself license:       </h2>
        <p className="text-xl sm:text-2xl text-center  textblue-500 "> €49</p>
      </div>
      <div >
        <div className="flex justify-center my-2">
          <img src='/down-right-arrow.svg' width={32} height={32} alt='down right arrow' />
        </div>
        <h2 className="text-xl sm:text-4xl font-bold  mx-auto  text-center">
          Custom license:
        </h2>
        <p className="text-xl sm:text-2xl text-center mx-auto textblue-500 max-w-md">  €1,000</p>
      </div>
    </div>
    <h2 className="text-xl sm:text-4xl font-bold   text-center mb-2">
      Our figures
    </h2>
    <iframe className="h-[100%] w-[90%] sm:w-[50%] overflow-hidden"
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_4gbWduXx0DtCVEcNXFy420fFs6KDuk3nonM_fb0EuEJNjhXKQK9Rbbl4PX6Fg6IjIVs_7hAQFGlm/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
  </div>
}
