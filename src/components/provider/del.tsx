"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getURL } from "next/dist/shared/lib/utils";
import config from "../../../richtpl.config";
import { usePathname, useSearchParams } from "next/navigation";

export function ElementDel(id: string, boolean: boolean) {
  const element = document.getElementById(id);
  if (element) {
    element.classList[boolean ? "add" : "remove"]("hidden");
  }
}

export function ConfigDelElements() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // マウントされたらフラグをtrueにする
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // alert("LOAD")
      ConfigDelElementsCheck();
    }
  }, [isMounted]);

  return null;
}

export function ConfigDelElementsCheck() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = `${pathname}?${searchParams}`;

  useEffect(() => {
    const isHiddenPage = {
      header: config.themeConfig.header?.hiddenPages?.some((hiddenPage) =>
        url.startsWith(hiddenPage.replace("*", ""))
      ),
      footer: config.themeConfig.footer?.hiddenPages?.some((hiddenPage) =>
        url.startsWith(hiddenPage.replace("*", ""))
      ),
    };
    // DOMの操作をする前に、クライアントサイドで実行する
    if (typeof window !== "undefined") {
      ElementDel("element-header", isHiddenPage.header || false);
      ElementDel("element-footer", isHiddenPage.footer || false);
    }
  }, [url]);
}
