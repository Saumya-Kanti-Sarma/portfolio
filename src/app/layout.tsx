import type { Metadata } from "next";
import "./globals.css"


export const metadata: Metadata = {
  title: "Saumya.dev",
  description: "Check out the portfolio website of Saumya Kanti Sarma build with next.js and styled with Tailwind CSS.",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
