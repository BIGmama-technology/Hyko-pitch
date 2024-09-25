export function Competitors() {
  return (
    <div className="w-full  h-full flex flex-col justify-center text-center items-center  text-blue-600 px-4 ">
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 ">
        Why are we better than our competitors?
      </h2>
      <p className="text-xl sm:text-2xl">
        We identified 7 competitors so far (production of customized artificial
        intelligence applications)
      </p>
      <div className="w-[90vw]  h-[100%] flex flex-col gap-2 items-center">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQgyGi73xSsMpZf9ZbUjLH1p4sLGYVwVtNQLp_F8RU-VxFJJhQ1k_puqSK4bTEGDw7dHlMvOTprvw6B/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          className="h-[80%] sm:h-[70%] md:h-[60%]  md:w-[50%] overflow-hidden"
          title="table of competetion"
        />
        <p className="pt-4 text-xl sm:text-2xl">
          We outperform our competitors in terms of the complexity we can handle
          :
        </p>
        <ul className="list-none pl-6 text-xl sm:text-2xl">
          <li>More complex usecases accessible to less technical profiles</li>
        </ul>
      </div>
    </div>
  );
}
