import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

type AccordionType = {
  title: string;
  description: string;
};

export default function HeroAccordions({ accordions }: { accordions: AccordionType[] }) {
  return (
    <div id="c:qa" className="relative w-full py-20 md:py-40">
      <div className="w-auto max-w-7xl mx-auto antialiased">
        <div className="w-full px-2 md:px-5 lg:px-8">
          <TracingBeam className="hidden lg:block">
            <Accordion type="single" collapsible className="w-full">
              {accordions.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TracingBeam>
          <Accordion
            type="single"
            collapsible
            className="block lg:hidden w-full"
          >
            {accordions.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx + 1}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
