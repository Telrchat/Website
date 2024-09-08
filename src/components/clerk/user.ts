"use server"

import { currentUser, User } from "@clerk/nextjs/server";

export const ClerkServerGetUser = async (): Promise<User | "//null"> => {
  const user = await currentUser();
  return user || "//null";
};
