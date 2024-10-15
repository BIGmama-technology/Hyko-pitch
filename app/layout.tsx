import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyko Pitch Deck",
  description:
    "AI tools for stress free life. automate your tasks with Hyko ai tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(nunito.className)}>{children}</body>
    </html>
  );
}
