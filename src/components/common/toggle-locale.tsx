"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function LocaleToggle() {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function
  const toggleLocale = (locale: "en" | "ar") => {
    router.push(`${pathname}?${searchParams.toString()}`, { locale });  };
  return (
    <div className="lg:block hidden">
      <DropdownMenu>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} className="border-0">

            <Globe color="#F82BA9" className="cursor-pointer"/>
          </Button>
        </DropdownMenuTrigger>

        {/* Content */}
        <DropdownMenuContent className="bg-black text-[#F82BA9]">
          {/* English */}
          <DropdownMenuItem onClick={() => toggleLocale("en")}>
            English
          </DropdownMenuItem>

          {/* Arabic */}
          <DropdownMenuItem onClick={() => toggleLocale("ar")}>
            العربية
          </DropdownMenuItem>
          {/* Add more languages here */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
