import React from "react";

type UserType = {
  username: string;
  avatar: React.ReactNode;
};

type ContentType = {
  message: string;
  sub: string;
};

export default function HeroSubContent({
  user,
  contentType,
}: {
  user: UserType;
  contentType: ContentType;
}) {

  return (
    <div className="pt-10 pb-20 flex flex-col items-center justify-center relative overflow-hidden w-full px-8">
      <div className="absolute inset-0 -top-40 bg-grid-neutral-100/70 dark:bg-grid-neutral-950/70 [mask-image:linear-gradient(to_bottom,transparent,white,white)] dark:[mask-image:linear-gradient(to_bottom,transparent,black,black)]" />
      <div className="relative flex flex-col items-center">
        <div className="rounded-full relative inline-block h-14 w-14  border-2 border-white dark:border-black shadow overflow-hidden mb-8">
          {user.avatar}
        </div>
        <blockquote className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9 text-neutral-700 dark:text-neutral-300 mb-8 whitespace-pre-line">
          {contentType.message}
        </blockquote>
        <p className="max-w-4xl mx-auto text-xs md:text-lg text-center !leading-9 text-black dark:text-white font-medium">
          {user.username}
        </p>
        <span className="max-w-4xl mx-auto text-xs md:text-base text-center !leading-9 text-neutral-500">
          {contentType.sub}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div className="absolute -right-8 bottom-0 -left-8 h-px bg-neutral-600/[0.1] dark:bg-neutral-400/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:[mask-image:linear-gradient(to_right,transparent,black_4rem,black_calc(100%-4rem),transparent)]" />
      </div>
      <div className="absolute bottom-0 right-48 flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
        </div>
      </div>
    </div>
  );
}
