"use client";

import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";

export default function MenuToggle() {
  // Translation
  const t = useTranslations();

  return (
    <div className="lg:hidden block">
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} className="border-0">

          <AlignJustify className="text-[#F82BA9]"/>
          </Button>
          
        </DropdownMenuTrigger>

        {/* Menu content */}
        <DropdownMenuContent className="bg-black text-[#F82BA9]">
          {/* Home  */}
          <DropdownMenuItem>
            <Link href="/" className="text-[18px]">
              {t("home")}
            </Link>
          </DropdownMenuItem>

          {/* About  */}
          <DropdownMenuItem>
            <Link href="/about" className="text-[18px]">
              {t("about")}
            </Link>
          </DropdownMenuItem>

          {/* Contact  */}
          <DropdownMenuItem>
            <Link href="/projects" className="text-[18px]">
              {t("projects")}
            </Link>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
