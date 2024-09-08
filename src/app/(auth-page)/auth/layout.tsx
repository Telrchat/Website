import { Metadata, ResolvingMetadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.Auth.Metadata" });

  return {
    title: `${t("title")}`,
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-[100dvh]">
      {children}
    </div>
  );
}
