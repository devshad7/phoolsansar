import "./globals.css";

export const metadata = {
  title: "Phool Sansar | A World Of Blessing",
  description: "GPhool Sansar is a vibrant celebration of nature's beauty, offering a mesmerizing array of flowers and plants. From delicate blossoms to exotic arrangements, it’s a one-stop destination for flower enthusiasts, event decorators, and anyone who cherishes the magic of blooms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-primary-text bg-primary-bg" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
