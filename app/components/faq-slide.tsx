import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqContent } from "./constants";



export function FaqSlide() {
  return <div className="text-blue-600  max-h-[75vh] sm:max-h-[80vh] mx-4 h-full text-center flex flex-col justify-center">
    <h2 className="text-2xl sm:text-4xl font-bold mb-8">What they usually ask ?</h2>
    <Accordion type="multiple" className="overflow-y-scroll">
      {faqContent.map(faq => (
        <AccordionItem value={faq.title} key={faq.title} className='hover:bg-muted rounded-md  sm:p-6 transition-all'>
          <AccordionTrigger className=' '>
            <h2 className='text-lg font-semibold md:text-2xl w-full'>{faq.title}</h2>
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
