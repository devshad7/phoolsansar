import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Phool Sansar | A World Of Blessing",
  description: "Phool Sansar: A World of Nature, Trends, and Facts is your go-to platform for exploring the beauty of flowers, plants, and nature while staying updated on trending topics, stories, and market insights. Dive into a vibrant world where nature meets knowledge!",
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
