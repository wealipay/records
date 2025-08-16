import React from "react";
import type { Metadata } from "next";
import { Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const font = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mashan",
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: "开发记录",
    template: "%s|开发记录",
    absolute: ""
  },
  description: "记录网站开发的流程",
  keywords: ["开发记录"],
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={font.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <body>{children}ggg</body>
    </html>
  );
}
