import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqContent } from "./constants";



export function FaqSlide() {
  return <div className="text-blue-600  max-h-[75vh] mx-4 h-full text-center flex flex-col justify-center">
    <h2 className="text-2xl sm:text-2xl font-bold mb-8">What they usually ask ?</h2>
    <Accordion type="multiple" className="overflow-y-scroll">
      {faqContent.map(faq => (
        <AccordionItem value={faq.title} key={faq.title} className='hover:bg-muted rounded-md  sm:p-6 transition-all'>
          <AccordionTrigger className=' hover:no-underline  '>
            <h2 className='text-lg font-bold md:text-2xl w-full'>{faq.title}</h2>
          </AccordionTrigger>
          <AccordionContent>
            <ul >
              {faq.items.map(item => <li className='text-blue-600 text-sm md:text-base py-2' key={item}>- {item}</li>)}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>

  </div>
}
