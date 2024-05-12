import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Sidebar from "~/components/sidebar";
import Header from "~/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "CryptoSync",
  description: "Generated by Brandon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} flex items-start justify-between `}
        >
          <div className="bg-jetBlack border-brightBlue min-h-screen min-w-[200px] border-r">
            <Sidebar />
          </div>
          <main className="grid h-full w-full">
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
