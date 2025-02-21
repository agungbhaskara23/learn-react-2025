"use client"

// import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import "./globals.css";

const disableNavbar = ["/login", "/register"]

// export const metadata: Metadata = {
//   title: "Frontend Full",
//   description: "Try Creating Full Frontend using React and Next.js",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
