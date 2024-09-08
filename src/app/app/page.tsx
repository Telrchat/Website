import type { Metadata, ResolvingMetadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import OrganizationSwitch from "./OrganizationSwitch";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getLocale();
  const t = await getTranslations({ lang, namespace: "Pages.App.Metadata" });

  return {
    title: t("title"),
  };
}

export default async function Home() {
  const user = await currentUser();

  if (!user)
    return (
      <>
        <SignInButton />
      </>
    );

  type TableType = {
    key: string;
    value: string | number | undefined | null;
  };

  const table: TableType[] = [
    { key: "ID", value: user.id },
    { key: "passwordEnabled", value: `${user.passwordEnabled}` },
    { key: "totpEnabled", value: `${user.totpEnabled}` },
    { key: "backupCodeEnabled", value: `${user.backupCodeEnabled}` },
    { key: "twoFactorEnabled", value: `${user.twoFactorEnabled}` },
    { key: "banned", value: `${user.banned}` },
    { key: "createdAt", value: user.createdAt },
    { key: "updatedAt", value: user.updatedAt },
    { key: "imageUrl", value: user.imageUrl },
    { key: "hasImage", value: `${user.hasImage}` },
    { key: "primaryEmailAddressId", value: user.primaryEmailAddressId },
    { key: "primaryPhoneNumberId", value: user.primaryPhoneNumberId },
    { key: "primaryWeb3WalletId", value: user.primaryWeb3WalletId },
    { key: "lastSignInAt", value: user.lastSignInAt },
    { key: "externalId", value: user.externalId },
    { key: "username", value: user.username },
    { key: "firstName", value: user.firstName },
    { key: "lastName", value: user.lastName },
    { key: "publicMetadata", value: `${user.publicMetadata}` },
    { key: "privateMetadata", value: `${user.privateMetadata}` },
    { key: "unsafeMetadata", value: `${user.unsafeMetadata}` },
    { key: "phoneNumbers", value: `${user.phoneNumbers}` },
    { key: "hasVerifiedPhoneNumber", value: null },
    { key: "web3Wallets", value: `${user.web3Wallets}` },
    { key: "externalAccounts", value: `${user.externalAccounts}` },
    { key: "lastActiveAt", value: user.lastActiveAt },
    {
      key: "createOrganizationEnabled",
      value: `${user.createOrganizationEnabled}`,
    },
    { key: "createOrganizationsLimit", value: user.createOrganizationsLimit },
  ];

  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col justify-between items-center">
      <div className="relative flex flex-col justify-center items-center container h-full p-5 pb-20">
        <div className="flex flex-col my-10">
          <h1 className="font-bold text-2xl text-center md:text-5xl">
            A list of your account data
          </h1>
          <div className="flex justify-center items-center mt-8 mb-5">
            <OrganizationSwitch />
          </div>
          <Link href="/" className="w-full">
            <Button className="w-full mt-5">Go Back</Button>
          </Link>
        </div>
        <div className="flex justify-center items-center w-auto max-w-xl mx-auto h-full overflow-hidden">
          <Table>
            <TableCaption>A list of your account data.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Key</TableHead>
                <TableHead className="">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {table.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{item.key}</TableCell>
                  <TableCell className="truncate">
                    {item.value || <span className="opacity-30">null</span>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
