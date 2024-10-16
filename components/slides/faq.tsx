import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from "../../lib/constants";

export function FAQ() {
  return (
    <div className="max-w-3xl max-h-screen  rounded-lg items-center justify-center mx-auto flex-col text-center w-full">
      <h1 className="w-full text-center text-2xl my-4 lg:my-8 lg:text-4xl leading-relaxed">
        FAQ
      </h1>
      <Accordion
        type="multiple"
        className="max-w-3xl border rounded-lg items-center justify-center mx-auto flex-col text-center w-full"
      >
        {faqContent.map((faq) => (
          <AccordionItem value={faq.title} key={faq.title}>
            <AccordionTrigger className="px-2 font-semibold py-6 hover:bg-muted duration-300">
              <h2 className="text-base lg:text-xl w-full">{faq.title}</h2>
            </AccordionTrigger>
            <AccordionContent className="py-2 px-4">
              <ul>
                {faq.items.map((item) => (
                  <li
                    className="py-2 text-xs lg:text-sm max-w-[70%] mx-auto text-start"
                    key={item}
                  >
                    - {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
