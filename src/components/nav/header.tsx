"use client";

import config from "../../../richtpl.config";

import React, { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import ClerkUserButton from "../provider/clerk";

import { useLocale, useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

import { TLink } from "@/components/ui/Tcomps";
import { LogoVercel_Nextjs } from "@/components/ui/vercel_nextjs";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { MenuToggle } from "@/components/ui/MenuToggle";
import LanguageSelest from "../ui/LanguageSelest";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { ConfigDelElementsCheck } from "../provider/del";
import { SearchCommandDialog } from "../ui/command-search";

function Header() {
  const t = useTranslations("Languages");
  const lang = useLocale();
  const [isOpen, toggleOpen] = useCycle(false, true);

  ConfigDelElementsCheck();

  useEffect(() => {
    if (isOpen) {
      // isOpenがtrueの場合、body要素にno-scrollクラスを追加する
      document.body.classList.add("no-scroll");
    } else {
      // isOpenがfalseの場合、body要素からno-scrollクラスを削除する
      document.body.classList.remove("no-scroll");
    }

    // コンポーネントがアンマウントされた際にクリーンアップする
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  function Logo() {
    return (
      <>
        {config.themeConfig.header?.logo?.type === "Vercel&Next.js" ? (
          <LogoVercel_Nextjs />
        ) : (
          <>
            {config.themeConfig.header?.logo?.href ? (
              <Link
                href={config.themeConfig.header?.logo?.href}
                aria-label="Logo"
              >
                {config.themeConfig.header?.logo?.content || (
                  <h1 className="text-2xl font-bold">
                    {config.themeConfig.header?.title}
                  </h1>
                )}
              </Link>
            ) : (
              <>
                {config.themeConfig.header?.logo?.content || (
                  <h1 className="text-2xl font-bold">
                    {config.themeConfig.header?.title}
                  </h1>
                )}
              </>
            )}
          </>
        )}
      </>
    );
  }

  function NavItems({ type }: { type: "left" | "right" }) {
    if (type === "left") {
      return (
        <>
          {config.themeConfig.header?.items?.left?.map((link, idx) => (
            <TLink
              key={idx}
              target={link.target}
              href={link.href}
              i18n_text={link.i18n_text || false}
              onClick={() => toggleOpen()}
            >
              {link.label}
            </TLink>
          ))}
        </>
      );
    }
    return (
      <>
        {config.themeConfig.header?.items?.right?.map((link, idx) => (
          <TLink
            key={idx}
            target={link.target}
            href={link.href}
            i18n_text={link.i18n_text || false}
            onClick={() => toggleOpen()}
          >
            {link.label}
          </TLink>
        ))}
      </>
    );
  }

  return (
    <>
      <header
        id="element-header"
        className="bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] sticky top-0 z-[49] flex flex-col justify-center items-center w-full h-16 px-6 border-b border-neutral-50 dark:border-neutral-950 shadow-sm backdrop-blur-md"
        suppressHydrationWarning
      >
        <nav className="relative flex justify-center items-center w-full max-w-[var(--ds-page-width)] my-auto">
          <div className="flex lg:hidden justify-between items-center w-full">
            <div className="flex gap-2">
              <Logo />
            </div>
            <div className="flex items-center gap-1">
            <SearchCommandDialog maxWidth={1024} />
              {config.themeConfig.header?.items?.project?.repository ===
                "block" && (
                <Link
                  href={`https://github.com/${config.organizationName}/${config.projectName}`}
                  target="block"
                >
                  <Button
                    variant="ghost"
                    className="w-10 h-10 p-2"
                    aria-label="GitHub project repository"
                  >
                    <FaGithub className="text-[21px]" />
                  </Button>
                </Link>
              )}
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="relative flex justify-center items-center w-10 h-10 text-sm font-medium rounded-md whitespace-nowrap"
              >
                <MenuToggle toggle={() => toggleOpen()} />
              </motion.div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6 w-auto mr-auto">
            <div className="flex gap-2 mr-5">
              <Logo />
            </div>
            <NavItems type="left" />
          </div>
          <div className="hidden lg:flex items-center gap-3 w-fit">
            <NavItems type="right" />
            {config.themeConfig.header?.items?.project?.repository ===
              "block" && (
              <Link
                href={`https://github.com/${config.organizationName}/${config.projectName}`}
                target="block"
              >
                <Button
                  variant="ghost"
                  className="w-10 h-10 p-0"
                  aria-label="GitHub project repository"
                >
                  <FaGithub className="text-[21px]" />
                </Button>
              </Link>
            )}
            <SearchCommandDialog minWidth={1024} />
            <ModeToggle />
            <Suspense fallback={<Skeleton className="w-7 h-7 rounded-full" />}>
              <ClerkUserButton />
            </Suspense>
          </div>
        </nav>
      </header>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:hidden bottom-0 left-0 z-[49] w-full h-[calc(100dvh-64px)] bg-background text-foreground transition-all duration-300 ease-in-out`}
      >
        <nav className="flex flex-col justify-between items-start gap-3 w-full h-full p-6">
          <div className="flex flex-col justify-between items-start gap-3 w-full h-full">
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              <NavItems type="left" />
            </div>
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              <NavItems type="right" />
              <div className="flex justify-between items-center gap-3 w-full mt-2">
                <div className="flex gap-3">
                  <LanguageSelest />
                  {config.themeConfig.colorMode.selectSwitch && <ModeToggle />}
                </div>
                <Suspense
                  fallback={<Skeleton className="w-7 h-7 rounded-full" />}
                >
                  <ClerkUserButton />
                </Suspense>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
