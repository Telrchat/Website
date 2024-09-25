import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomSignOutButton } from "./button";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { PageActionGoBack } from "../page-action";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.Auth" });

  return {
    title: `${t("Sign out")}`,
  };
}

export default async function PageLogoout() {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.Auth" });

  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <Card className="container">
        <CardHeader>
          <CardTitle>本当にサインアウトしますか？</CardTitle>
        </CardHeader>
        <CardContent>
          アカウントのデータは削除されませんが、再度利用する際はサインインする必要があります。
        </CardContent>
        <CardFooter>
          <CustomSignOutButton/>
          <PageActionGoBack className="ml-5 px-3">{t("Go back")}</PageActionGoBack>
        </CardFooter>
      </Card>
    </div>
  );
}
