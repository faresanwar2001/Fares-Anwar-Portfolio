"use client";

import LocaleToggle from "@/components/common/toggle-locale";
import MenuToggle from "@/components/common/toggle-menue";
import { ModeToggle } from "@/components/common/toggle-mode";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Navbar() {
  // Translation
  const t = useTranslations();

  return (
    <>
      <div className="container  top-0 right-0 left-0  mx-auto flex justify-between items-center py-5 lg:px-0 px-4">
        <div className="flex">
          {/* Logo */}
          <h2 className="text-[20px] tracking-[3px] ltr:mr-16 rtl:ml-16">
            FA<span className="text-[#F82BA9]">R</span>ES
          </h2>
          <ul className="lg:flex gap-8 hidden">
            {/* Home  */}
            <li className="text-[18px]">
              <Link href={"/"}>{t("home")}</Link>
            </li>

            {/* About  */}
            <li className="text-[18px]">
              <Link href={"/about"}>{t("about")}</Link>
            </li>

            {/* Projects  */}
            <li className="text-[18px]">
              <Link href={"/projects"}>{t("projects")}</Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          {/* GitHub */}
          <Button variant={"outline"} className="border-0">
            <Link
              className="text-[#F82BA9]"
              href={"https://github.com/faresanwar2001"}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </Button>
          {/* Language Switcher */}
          <LocaleToggle />

          {/* Menu Toggle */}
          <MenuToggle />

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
