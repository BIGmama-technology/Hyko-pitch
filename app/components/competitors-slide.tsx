
export function Competitors() {


  return <div className="w-full  h-full flex flex-col justify-center text-center items-center max-h-[75vh] text-blue-600 px-4 ">
    <h2 className="text-2xl sm:text-4xl font-bold mb-8 ">
      Why are we better than our competitors?
    </h2>
    <p className="text-xl sm:text-2xl">
      We identified 7 competitors so far (production of customized artificial intelligence applications)
    </p>
    <a
      href='https://docs.google.com/spreadsheets/d/1wKidLGGqLmWIPtpyyXwuhI-r_1ne54drOUW70W0Co9o/edit?usp=sharing'
      className="text-xl sm:text-2xl text-center   mt-8 flex gap-2 items-center justify-center "
    >
      <p>
        competitors
      </p>
      <img src='/google-sheet.svg' alt='google sheet' className="w-8 h-8" />
    </a >
  </div>
}
