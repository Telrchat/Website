import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ContainerImageScroll } from "@/components/ui/container-scroll-animation";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

type PeopleType = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export default async function HeroTitle({
  people,
  scrollContent,
}: {
  people: PeopleType[];
  scrollContent: React.ReactNode;
}) {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.Home" });

  return (
    <>
      <div className="relative pb-4 md:pb-10 flex flex-col items-center justify-center px-8  md:px-8 overflow-hidden ">
        <div className="relative flex flex-col items-center justify-center mt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 dark:text-neutral-300 max-w-6xl mx-auto">
            {t("HeroTitle.title.1")}
            <br className="block md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-600 to-blue-600/[0.8]">
              {t("HeroTitle.title.2")}
            </span>
          </h1>
          <h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
            {t("HeroTitle.subtitle")}
          </h2>
        </div>
        <div className="relative z-10 group mb-10">
          <AnimatedTooltip priority items={people} />
        </div>
      </div>
      <HeroScrollContent scrollContent={scrollContent} />
    </>
  );
}

function HeroScrollContent({
  scrollContent,
}: {
  scrollContent: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <ContainerImageScroll>{scrollContent}</ContainerImageScroll>
    </div>
  );
}
