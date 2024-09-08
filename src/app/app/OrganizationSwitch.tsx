"use client";

import React from "react";
import { OrganizationSwitcher } from "@clerk/nextjs";

function OrganizationSwitch() {
  return (
    <OrganizationSwitcher>
      <OrganizationSwitcher.OrganizationProfilePage label="members" />
    </OrganizationSwitcher>
  );
}

export default OrganizationSwitch;
