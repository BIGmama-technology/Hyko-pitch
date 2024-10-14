import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from "../../lib/constants";

export function FAQ() {
  return (
    <section className="flex justify-center items-center h-full w-full max-w-4xl mx-auto">
      <Accordion
        type="multiple"
        className="border rounded-md text-center w-full"
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
    </section>
  );
}
