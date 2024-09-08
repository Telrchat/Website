"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

// TLinkPropsインターフェースはTLinkコンポーネントのプロパティを定義します
interface TLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  i18n_text?: boolean;
  i18n_path?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

// TLinkコンポーネントは国際化対応のリンクを生成します
const TLink = React.forwardRef<HTMLAnchorElement, TLinkProps>(
  (
    {
      children,
      className,
      href,
      target = "_self",
      i18n_text = false,
      i18n_path = "",
      onClick,
    },
    ref
  ) => {
    const t = useTranslations();

    return (
      <Link
        href={href}
        target={target}
        onClick={onClick}
        className={className}
        aria-label="link"
        ref={ref}
      >
        {i18n_text
          ? t(`${i18n_path}${i18n_path ? "." : ""}${children}`)
          : children}
      </Link>
    );
  }
);

TLink.displayName = "TLink";

export { TLink };
