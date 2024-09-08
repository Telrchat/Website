"use client";

import React from "react";
import {
  OrganizationSwitcher,
  RedirectToOrganizationProfile,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { motion } from "framer-motion";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

const CustomPage = () => {
  return (
    <div>
      <h1>Custom Organization Profile Page</h1>
      <p>This is the custom organization profile page</p>
    </div>
  );
};

function ClerkUserButton() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="box-border flex items-center bg-blue-500 text-white w-fit py-1 px-4 rounded-2xl shadow-md shadow-blue-500/50 cursor-pointer"
          >
            Sign in
          </motion.div>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      {/* <OrganizationSwitcher>
        <OrganizationSwitcher.OrganizationProfilePage
          label="Custom Page"
          url="custom"
          labelIcon={<DotIcon />}
        >
          <CustomPage />
        </OrganizationSwitcher.OrganizationProfilePage>
        <OrganizationSwitcher.OrganizationProfilePage
          label="Terms"
          labelIcon={<DotIcon />}
          url="terms"
        >
          <div>
            <h1>Custom Terms Page</h1>
            <p>This is the custom terms page</p>
          </div>
        </OrganizationSwitcher.OrganizationProfilePage>
      </OrganizationSwitcher> */}
    </>
  );
}

export default ClerkUserButton;
