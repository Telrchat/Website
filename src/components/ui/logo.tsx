"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { Suspense } from "react";

export interface BrandLogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  dynamicImage?: {
    light: string;
    dark: string;
  };
  priority?: boolean;
}

const BrandLogo = React.forwardRef<HTMLImageElement, BrandLogoProps>(
  ({ className, src, alt, width, height, dynamicImage, priority, ...props }, ref) => {
    const theme = useTheme();
    return (
      <Suspense fallback={null}>
        {dynamicImage ? (
          <>
            <Image
              ref={ref}
              src={dynamicImage.light}
              alt={alt}
              width={width}
              height={height}
              className={cn("", className, "dark:hidden")}
              priority={priority}
              {...props}
            />
            <Image
              ref={ref}
              src={dynamicImage.dark}
              alt={alt}
              width={width}
              height={height}
              className={cn("", className, "hidden dark:block")}
              priority={priority}
              {...props}
            />
          </>
        ) : (
          <Image
            ref={ref}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn("", className)}
            priority={priority}
            {...props}
          />
        )}
      </Suspense>
    );
  }
);

BrandLogo.displayName = "BrandLogo";

export default BrandLogo;
