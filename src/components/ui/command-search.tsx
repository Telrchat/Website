"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  Command,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import config from "../../../richtpl.config";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { DialogTitle } from "./dialog";


export function SearchCommandDialog({ minWidth, maxWidth }: { minWidth?: number, maxWidth?: number}) {
  const t = useTranslations("SearchCommand");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const width = window.innerWidth;
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        if ((minWidth === undefined || width >= minWidth) &&
            (maxWidth === undefined || width <= maxWidth)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [minWidth, maxWidth]);

  return (
    <>
      <div className="hidden lg:block">
        <button
          onClick={() => setOpen((open) => !open)}
          className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        >
          <span className="hidden lg:inline-flex">
            {t("Search website&#46;&#46;&#46;")}
          </span>
          <span className="inline-flex lg:hidden">
            {t("Search&#46;&#46;&#46;")}
          </span>
          <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">
              <Command size={12} />
            </span>
            <span className="text-xs">K</span>
          </kbd>
        </button>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setOpen((open) => !open)}
          className="flex justify-center items-center w-10 h-10"
        >
          <Search />
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle />
        <CommandInput
          placeholder={t("Type a command or search&#46;&#46;&#46;")}
        />
        <CommandList>
          <CommandEmpty>{t("No results found&#46;")}</CommandEmpty>

          {config.themeConfig.SearchCommand?.map((group, idx) => (
            <CommandGroup
              key={idx}
              heading={
                group.i18n_text ? t(`items.${group.label}`) : group.label
              }
            >
              {group.items.map((item, index) => {
                if (item.href) {
                  return (
                    <Link
                      key={index}
                      onClick={() => setOpen((open) => !open)}
                      href={item.href}
                      target={item.target || "_self"}
                    >
                      <CommandItem>
                        <span className="mr-2">{item.icon}</span>
                        <span>
                          {item.i18n_text
                            ? t(`items.${item.label}`)
                            : item.label}
                        </span>
                      </CommandItem>
                    </Link>
                  );
                }
                return (
                  <CommandItem key={index} onClick={item.action}>
                    {item.icon}
                    <span>
                      {item.i18n_text ? t(`items.${item.label}`) : item.label}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
