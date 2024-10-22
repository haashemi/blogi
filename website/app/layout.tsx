import "./globals.css";

import type { Metadata, Viewport } from "next";

import { Vazirmatn } from "next/font/google";

import { Footer, Header } from "./_components/app-layout";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "بلاگی - وبلاگی جامع و ساده",
  description:
    "بلاگی یک سایت ساده است که در واقع پروژه دانشگاهی بوده که توش می‌تونید در مورد هرچیزی به هر شکلی بلاگ پست های خودتون رو بنویسید و وبلاگ خودتون رو داشته باشید.",
};

export const viewport: Viewport = {
  themeColor: "#f4f4f5",

  // colorScheme: "dark light",
  // themeColor: [
  //   { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  //   { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
  // ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`bg-zinc-100 font-sans text-black antialiased dark:bg-zinc-950 dark:text-white ${vazirmatn.variable}`}
      >
        <div className="mx-auto flex min-h-screen w-full max-w-prose flex-col items-center gap-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
