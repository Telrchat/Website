"use client";

import { SignOutButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CustomSignOutButton() {
  const t = useTranslations("Pages.Auth");
  return (
    <SignOutButton>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="box-border flex items-center bg-blue-500 text-white w-fit py-1 px-4 rounded-2xl shadow-md shadow-blue-500/50 cursor-pointer"
      >
        {t("Sign out")}
      </motion.div>
    </SignOutButton>
  );
}
