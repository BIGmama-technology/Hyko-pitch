import { ExternalLink, Link, MoveRight } from "lucide-react";

export function Competitors() {


  return <div className="w-full  h-full flex flex-col justify-center text-center items-center max-h-[75vh] sm:max-h-[80vh] text-blue-600 px-4 ">
    <h2 className="text-2xl sm:text-4xl font-bold mb-8 ">
      Why are we better than our competitors?
    </h2>
    <p className="text-xl sm:text-2xl">
      We identified 7 competitors so far (production of customized artificial intelligence applications)
    </p>
    <a
      href='https://docs.google.com/spreadsheets/d/1wKidLGGqLmWIPtpyyXwuhI-r_1ne54drOUW70W0Co9o/edit?usp=sharing'
      className="text-xl sm:text-2xl text-center hover:underline  mt-8 flex gap-3 items-center justify-center "
      target="_blank"
    >
      <p>
        List of
        competitors
      </p>
      <ExternalLink className='h-8 w-8' />
    </a >
  </div>
}
