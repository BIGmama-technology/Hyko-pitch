export function BusinessModel() {
  return <div className="flex w-full h-full flex-col items-center  text-blue-600 justify-center px-4">
    <h2 className="text-2xl sm:text-4xl font-bold  text-center">
      Our Business Model:
    </h2>
    <p className="text-xl sm:text-2xl sm:text-center textblue-500 ">Our Figures </p>

    <div className=" grid grid-cols-2  justify-between w-full my-4 sm:my-10">
      <div className="text-center">
        <p className="text-lg font-bold sm:text-2xl sm:text-center textblue-500 ">Pre-revenue valuation:</p>

        <p className="text-lg  sm:text-2xl sm:text-center textblue-500 ">€25,000,000.00</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold  sm:text-2xl sm:text-center textblue-500 ">Our need:</p>

        <p className="text-lg  sm:text-2xl sm:text-center textblue-500 ">€2,500,000.00</p>
      </div>
    </div>
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
        <p className="text-xl sm:text-2xl text-center  textblue-500 "> €200 per user per month/user</p>
      </div>
      <div >
        <div className="flex justify-center my-2">
          <img src='/down-right-arrow.svg' width={32} height={32} alt='down right arrow' />
        </div>
        <h2 className="text-xl sm:text-4xl font-bold  mx-auto  text-center">
          Custom license:
        </h2>
        <p className="text-xl sm:text-2xl text-center mx-auto textblue-500 max-w-md"> 6 hours per mon﻿th, with a prototype manager for €1,500/month/user</p>
      </div>
    </div>
  </div>
}
