import { Toaster } from "react-hot-toast";
import "./globals.css";

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
      <body className="text-primary-text bg-primary-bg" suppressHydrationWarning>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
