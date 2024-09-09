import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqContent } from "./constants";



export function FaqSlide() {
  return <div className="text-blue-600  max-h-[92vh] mx-4 h-full flex flex-col justify-center">
    <h2 className="text-2xl sm:text-2xl font-bold mb-2 sm:mb-8 ">What they usually ask ?</h2>
    <Accordion type="multiple" className="overflow-y-scroll">
      {faqContent.map(faq => (
        <AccordionItem value={faq.title} key={faq.title} className='hover:bg-muted rounded-md  sm:p-6 transition-all'>
          <AccordionTrigger className='text-left hover:no-underline'>
            <h2 className='text-lg font-bold md:text-2xl'>{faq.title}</h2>
          </AccordionTrigger>
          <AccordionContent>
            <ul >
              {faq.items.map(item => <li className='text-blue-600 text-sm md:text-base py-2' key={item}>{item}</li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem value={'WHY ARE WE UNIQUE?'} className='hover:bg-muted rounded-md sm:p-6 transition-all'>
        <AccordionTrigger className='text-left hover:no-underline'>
          <h2 className='text-lg font-bold md:text-2xl'>WHY ARE WE UNIQUE?</h2>
        </AccordionTrigger>
        <AccordionContent className="text-blue-600">
          <ul >
            <li className=' text-sm md:text-base py-2' >
              First, Hyko constitutes of a very large codebase. Even with a blueprint, reproduction could take months for a competent team (for only the very first iteration of the process).
            </li>
            <li className='text-sm md:text-base py-2' >
              Our vision is so different (we believe more in people than in machines) that our competitors don't see the market in the same way we do.
            </li>
            <li className='text-sm md:text-base py-2' >
              The quality of our team means that even someone with the same great idea as us couldn't do it as quickly.
            </li>
            <li className=' text-sm md:text-base py-2' >
              Most importantly, is the ability to redesign Hyko's architecture in line with the day-to-day changes in our industry. This requires great strategic expertise, an outstanding technological capacity, a rare ability to execute and an extraordinary intuition. All this, is very difficult to replace.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={'WHAT IS OUR VISION ?'} className='hover:bg-muted rounded-md sm:p-6 transition-all'>
        <AccordionTrigger className='text-left hover:no-underline'>
          <h2 className='text-lg font-bold md:text-2xl'>WHAT IS OUR VISION ?</h2>
        </AccordionTrigger>
        <AccordionContent className="text-blue-600">
          <ul >
            <li className='text-sm md:text-base py-2' >
              The future value of AI will not come from AI engineers or data scientists, it will come from field experts who will be able to combine their expertise with AI in order to solve daily problems.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  </div>
}
