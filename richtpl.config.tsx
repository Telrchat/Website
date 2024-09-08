import BrandLogo from "@/components/ui/logo";
import Config from "@/types/richtpl.config";
import {
  Book,
  ChartGantt,
  Home,
  LayoutGrid,
  MessageCircleQuestion,
} from "lucide-react";

/**
 * Site configuration object.
 * Contains general site information, i18n settings, and theme configuration.
 */
const config: Config = {
  // Tagline for the site
  tagline: "Telrchat",

  // URL to the favicon
  favicon: "/favicon.ico",

  // Production URL of the site
  url: "https://telrchat.vercel.app",

  // Base URL pathname (for GitHub Pages deployment)
  baseUrl: "/",

  // GitHub deployment configuration
  organizationName: "Telrchat", // GitHub organization/user name
  projectName: "Website", // GitHub repository name

  // Internationalization (i18n) configuration
  i18n: {
    // Default locale for the site
    defaultLocale: "ja",
    // List of supported locales
    locales: ["ja", "en"],
    // Locale-specific configurations
    localeConfigs: {
      ja: {
        label: "日本語", // Label for the Japanese locale
        htmlLang: "ja-JP", // HTML language attribute for Japanese
        path: "ja", // Path prefix for Japanese locale
      },
      en: {
        label: "English", // Label for the English locale
        htmlLang: "en-US", // HTML language attribute for English
        path: "en", // Path prefix for English locale
      },
    },
    selectButton: true, // Option to include a locale selection button
  },

  // Theme and layout configuration
  themeConfig: {
    // Color mode settings
    colorMode: {
      defaultMode: "system", // Default color mode (light, dark, or system)
      selectSwitch: true, // Whether to allow switching color modes
    },
    // URL to the social card image (replace with your project's image)
    image: "/brand/telrchat-high-resolution-logo.png",
    // Metadata for the site
    metadata: {
      keywords: ["private", "Chat", "WebApp", "free"],
      authors: { name: "Telrchat", url: "https://github.com/Telrchat" },
      creator: "Telrchat",
      icons: "/favicon.ico",
      generator: "Next.js",
      publisher: "Vercel",
      robots: "follow, index",
      metadataBase: new URL("https://telrchat.vercel.app"),
    },
    SearchCommand: [
      {
        label: "Pages",
        i18n_text: true,
        items: [
          {
            label: "Home",
            icon: <Home />,
            href: "/",
            i18n_text: true,
          },
          {
            label: "Timeline",
            icon: <ChartGantt />,
            href: "/#timeline",
            i18n_text: true,
          },
          {
            label: "Q&A",
            icon: <MessageCircleQuestion />,
            href: "/#c:qa",
            i18n_text: false,
          },
          {
            label: "App",
            icon: <LayoutGrid />,
            href: "/app",
            i18n_text: true,
          },
        ],
      },
    ],
    // Header configuration
    header: {
      // Title for the header
      title: "Telrchat",
      logo: {
        content: (
          <BrandLogo
            src="/brand/svg/icon-no-background.svg"
            alt="Telrchat"
            width={40}
            height={40}
            priority
          />
        ),
      },
      // Navigation items in the header
      items: {
        // Items on the left side of the header
        left: [
          {
            label: "Home", // Label for the item
            href: "/", // Internal URL path
            i18n_text: true, // Whether to include locale prefix in the Text
          },
          {
            label: "Timeline", // Label for the item
            href: "/#c:timeline", // Internal URL path
            i18n_text: true, // Whether to include locale prefix in the Text
          },
          {
            label: "Q&A", // Label for the item
            href: "/#c:qa", // Internal URL path
            i18n_text: false, // Whether to include locale prefix in the Text
          },
          {
            label: "App", // Label for the item
            href: "/app", // Internal URL path
            i18n_text: true, // Whether to include locale prefix in the Text
          },
        ],
      },
      hiddenPages: ["/auth/*", "/app"],
    },
    // Footer configuration
    footer: {
      // Title for the footer
      title: "Telrchat",
      // Logo configuration
      logo: {
        content: (
          <BrandLogo
            src="/brand/telrchat-high-resolution-logo-transparent-dark.png"
            alt="Telrchat"
            width={150}
            height={50}
            dynamicImage={{
              light:
                "/brand/telrchat-high-resolution-logo-transparent-dark.png",
              dark: "/brand/telrchat-high-resolution-logo-transparent-light.png",
            }}
            className="w-36 h-auto"
          />
        ),
      },
      // Social links configuration
      social: {
        github: true, // Whether to include a GitHub link
        twitter: "Telrchat", // Twitter handle
      },
      footerText: {
        i18n: true, // Whether the footer text should be localized
      },
      // Footer navigation items
      items: [
        {
          title: "Resources", // Title for the section
          title_i18n: true, // Whether the title should be localized
          contents: [
            {
              label: "Docs", // Label for the item
              href: "https://nextjs.org/docs", // External URL
              target: "_blank", // Open link in a new tab
              i18n_text: true, // Whether the text should be localized
            },
            {
              label: "Learn",
              href: "https://nextjs.org/learn",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Showcase",
              href: "https://nextjs.org/showcase",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Blog",
              href: "https://nextjs.org/blog",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Analytics",
              href: "https://vercel.com/analytics?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Next&#46;js Conf",
              href: "https://nextjs.org/conf",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Previews",
              href: "https://vercel.com/products/previews?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
          ],
        },
        {
          title: "More",
          title_i18n: true,
          contents: [
            {
              label: "Next&#46;js Commerce",
              href: "https://vercel.com/templates/next.js/nextjs-commerce?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Contact Sales",
              href: "https://vercel.com/contact/sales?utm_source=next-site&utm_medium=footer&utm_campaign=home",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "GitHub",
              href: "https://github.com/vercel/next.js",
              target: "_blank",
            },
            {
              label: "Releases",
              href: "https://github.com/vercel/next.js/releases",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Telemetry",
              href: "https://nextjs.org/telemetry",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "Governance",
              href: "https://nextjs.org/governance",
              target: "_blank",
              i18n_text: true,
            },
          ],
        },
        {
          title: "About Telrchat",
          title_i18n: true,
          contents: [
            {
              label: "GitHub",
              href: "https://github.com/telrchat",
              target: "_blank",
            },
            {
              label: "X",
              href: "https://twitter.com/telrchat",
              target: "_blank",
            },
          ],
        },
      ],
      hiddenPages: ["/auth/*", "/app"],
    },
    // Sitemap Configuration
    sitemap: {
      excludedDirs: [
        "error", // Directory for error pages
        "not-found", // Directory for 404 pages
        "[...rest]", // Directory for [...rest] pages
        "auth",
        "app",
      ],
    },
  },
};

export default config;
