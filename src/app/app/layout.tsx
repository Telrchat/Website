import { Suspense } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// config
import config from "../../../richtpl.config";

// next-intl (i18n)
import { getLocale, getMessages, getTranslations } from "next-intl/server";

// ui
import LoaderRo13 from "@/components/ui/loaderro13";
import { AppSidebar } from "@/components/nav/sidebar";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Metadata" });

  return {
    title: {
      template: `%s | ${
        config.themeConfig?.metadata?.title || config.title || t(`title`)
      }`,
      default: `${
        config.themeConfig?.metadata?.title || config.title || t(`title`)
      }`,
    },
  };
}

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
      <AppSidebar>
        <main className="w-full h-full">
          <Suspense fallback={<LoaderRo13 time={-1} />}>{children}</Suspense>
        </main>
      </AppSidebar>
    </>
  );
}
