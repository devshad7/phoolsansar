import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Phool Sansar | A World Of Blessing",
  description:
    "Phool Sansar: A World of Nature, Trends, and Facts is your go-to platform for exploring the beauty of flowers, plants, and nature while staying updated on trending topics, stories, and market insights. Dive into a vibrant world where nature meets knowledge!",
  openGraph: {
    title: "Phool Sansar | A World Of Blessing",
    description:
      "Phool Sansar: A World of Nature, Trends, and Facts is your go-to platform for exploring the beauty of flowers, plants, and nature while staying updated on trending topics, stories, and market insights. Dive into a vibrant world where nature meets knowledge!",
    url: "https://phoolsansar.com",
    siteName: "Phool Sansar",
    images: [
      {
        url: "/assets/banner.png",
        width: 1200,
        height: 630,
        alt: "Phool Sansar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phool Sansar | A World Of Blessing",
    description:
      "Explore the beauty of flowers, plants, and nature while staying updated on trends, stories, and market insights.",
    images: ["/assets/banner.png"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Phool Sansar",
      "url": "https://phoolsansar.com",
      "description":
        "Phool Sansar: A World of Nature, Trends, and Facts is your go-to platform for exploring the beauty of flowers, plants, and nature while staying updated on trending topics, stories, and market insights.",
      "publisher": {
        "@type": "Organization",
        "name": "Phool Sansar",
        "logo": {
          "@type": "ImageObject",
          "url": "/assets/banner.png",
        },
      },
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5365509659192950"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics Script (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-14TPZRN1H9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-14TPZRN1H9');
          `}
        </Script>
        <Script
          async
          data-cfasync="false"
          src="//pl26743197.profitableratecpm.com/b1499e341e56d3cb08173612ec10aecd/invoke.js"
        />
      </head>
      <body className="text-primary-text bg-primary-bg" suppressHydrationWarning>
        <Toaster />
        <div id="container-b1499e341e56d3cb08173612ec10aecd"></div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
