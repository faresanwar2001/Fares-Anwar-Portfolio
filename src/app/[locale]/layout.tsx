import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import NotFound from "./not-found";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/providers/themProvider";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export const metadata: Metadata = {
  title: "Fares Anwar",
  description: "Fares Anwar - Frontend Engineer",
};

type LocaleProps = {
  children: React.ReactNode;
} & Pick<BaseParams, "params">;

export default async function layoutLocal({
  params: { locale },
  children,
}: LocaleProps) {
  if (!routing.locales.includes(locale)) NotFound();

  // Massages
  const massages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={massages}>
            <Navbar/>
            {children}
          </NextIntlClientProvider>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
