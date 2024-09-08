import dynamic from "next/dynamic";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { TopBackground } from "@/components/pages/hero/top-background";
import HeroTitle from "@/components/pages/hero/title";

const HeroSubContent = dynamic(
  () => import("@/components/pages/hero/subContent"),
  {
    ssr: false,
  }
);

const HeroGoogleGeminiEffect = dynamic(
  () => import("@/components/pages/hero/gemil-animation"),
  {
    ssr: false,
  }
);

const HeroTimeline = dynamic(() => import("@/components/pages/hero/timeline"), {
  ssr: false,
});

const HeroAccordions = dynamic(
  () => import("@/components/pages/hero/accordions"),
  {
    ssr: false,
  }
);
const BackgroundBeamsWithCollision = dynamic(
  () => import("@/components/ui/background-beams-with-collision"),
  {
    ssr: false,
  }
);

export default async function Home() {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.Home" });

  const people = [
    {
      id: 1,
      name: "Fun117",
      designation: "Fullstack Developer",
      image: "/user/Fun117/_new/icon.png",
    },
  ];

  var accordions = [];

  for (var i = 0; i < Number(t("Accordions.length")); i++) {
    accordions.push({
      title: t(`Accordions.${i + 1}.title`),
      description: t(`Accordions.${i + 1}.description`),
    });
  }

  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center">
      <TopBackground />
      <HeroTitle
        people={people}
        scrollContent={
          <Avatar className="w-auto max-w-[400px] h-[800px] mx-auto rounded-2xl object-left-top object-cover">
            <AvatarImage
              width={400}
              height={800}
              src="/chat/hand-drawn-chat.png"
              alt="fun117"
            />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>
          // <Image
          //   src={`/chat/hand-drawn-chat.png`}
          //   alt="hero"
          //   width={400}
          //   height={800}
          //   className="mx-auto rounded-2xl object-cover w-full max-w-sm h-auto object-left-top"
          //   draggable={false}
          //   decoding="async"
          //   placeholder="blur"
          //   blurDataURL="/generated/placeholder.svg"
          //   quality={75}
          //   priority
          // />
        }
      />
      <HeroSubContent
        user={{
          username: "Fun117",
          avatar: (
            <Image
              src="/user/Fun117/_new/icon.png"
              alt="Fun117"
              width={100}
              height={100}
              className="transition duration-300 blur-0 inline-block object-cover object-top"
              decoding="async"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/generated/placeholder.svg"
              quality={75}
            />
          ),
        }}
        contentType={{
          message: t("HeroSubContent.message"),
          sub: t("HeroSubContent.sub"),
        }}
      />
      <HeroGoogleGeminiEffect />
      <HeroTimeline />
      <BackgroundBeamsWithCollision>
        <div id="c:fottext" className="flex flex-col max-w-full w-[calc(1200px+calc(2*24px))] h-full pt-10 md:mt-5 mx-auto relative tracking-tight">
          <h1 className="w-full h-fit text-2xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans">
            {t("BackgroundBeamsWithCollision.1")}{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">{t("BackgroundBeamsWithCollision.2")}</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">{t("BackgroundBeamsWithCollision.2")}</span>
              </div>
            </div>
          </h1>
          <HeroAccordions accordions={accordions} />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
