import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamogelo Mokone — Portfolio",
  description: "Microsoft Power Platform, SharePoint & AI Solutions Developer based in Midrand, South Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
