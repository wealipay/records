import React from "react";
import type { Metadata } from "next";
import { Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

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
  },
  viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={font.className}>
      <body className="h-dvh h-full">{children}</body>
    </html>
  );
}
