"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export function PageActionRequrl() {
  const searchParams = useSearchParams();
  const requrl = searchParams.get("requrl");
}

export interface PageActionGoBackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
const PageActionGoBack = React.forwardRef<
  HTMLButtonElement,
  PageActionGoBackProps
>(({ children, ...props }, ref) => {
  function GoBack() {
    window.history.back();
  }
  if (children) {
    return (
      <button {...props} onClick={GoBack} ref={ref}>
        {children || "Go Back"}
      </button>
    );
  }
});
PageActionGoBack.displayName = "PageActionGoBack";

export { PageActionGoBack };
