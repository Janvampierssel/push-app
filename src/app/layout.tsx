import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Push App",
  description: "Challenge and push your friends through push-ups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        {/* Background Radial Gradient */}
        <SessionProvider>{children}</SessionProvider>
        <div className="absolute h-screen w-screen overflow-hidden pointer-events-none">
          <div className="background-gradient-radial h-full absolute left-0 right-0 mx-auto top-1/3 -z-10 pointer-events-none"></div>
        </div>
      </body>
    </html>
  );
}
