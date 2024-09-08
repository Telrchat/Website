import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// config
import config from "../../../richtpl.config";

// next-intl (i18n)
import { getLocale, getMessages, getTranslations } from "next-intl/server";

// ui
import LoaderRo13 from "@/components/ui/loaderro13";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <>
      <main className="w-full h-full min-h-[calc(100dvh-64px)]">
        <Suspense fallback={<LoaderRo13 time={-1} />}>{children}</Suspense>
      </main>
    </>
  );
}
