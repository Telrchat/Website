import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HeroTimeline() {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.Home" });

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {t("HeroTimeline.2024.1")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="c:timeline" className="w-full">
      <Timeline
        title={t("HeroTimeline.title")}
        description={t("HeroTimeline.description")}
        data={data}
      />
    </div>
  );
}
