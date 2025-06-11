import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar.component";
import Footer from "@/components/Footer/Footer.component";


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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
