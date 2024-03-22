import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from './../components/header'

export const metadata: Metadata = {
  title: "ACPC Spring Contest",
  description: "Information on contest logistics, judging and so on!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header></Header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
