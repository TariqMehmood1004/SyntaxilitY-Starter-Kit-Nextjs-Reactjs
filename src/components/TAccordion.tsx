"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useEffect, useState } from "react";
import { defaultContent } from "@/types/types";

export default function TAccordion({
  onSectionChange,
}: {
  onSectionChange: (section: string) => void;
}) {

  // First item active by default
  const [activeSection, setActiveSection] = useState<string>(
    defaultContent[0].key
  );

  useEffect(() => {
    onSectionChange(activeSection);
  }, [activeSection, onSectionChange]);

  return (
    <Accordion
      variant="splitted"
      className="w-full h-full relative"
      defaultValue={["personal"]}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys as Set<string>)[0];
        if (selected) setActiveSection(selected);
      }}
    >
      {defaultContent.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.title}
          title={item.title}
          value={item.key} // use the key here
          className={`
            cursor-pointer w-full rounded-md py-1.5 px-3 transition-colors hover:bg-muted bg-muted/0
            ${
              activeSection === item.key
                ? "bg-primary/10" // highlight active
                : "bg-muted/0"
            }
            `}
          classNames={{
            trigger: "w-full flex justify-between items-center",
            content: "pt-2",
            indicator: "rotate-270 transition-transform duration-200",
            title: "text-[16px] font-medium text-left",
          }}
        >
          <span className="text-[14px] text-muted-foreground font-normal">
            {item.content}
          </span>
        </AccordionItem>
      ))}
    </Accordion>
  );
}