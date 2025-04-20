import { useTranslations } from "next-intl";
import Image from "next/image";
import header from "../../../../../public/images/about.jpg";
import { Link } from "@/i18n/routing";

export default function HeaderSection() {
  // Translation
  const t = useTranslations();

  return (
    <>
      <div className="lg:h-screen text-black dark:text-white">
        <div className="flex w-[70%] container px-4 mx-auto lg:justify-between justify-around lg:text-start text-center lg:items-center h-screen lg:flex-nowrap flex-wrap-reverse">
          <div className="lg:w-[45%] w-[100%] mb-4 lg:mb-0 px-4 lg:px-0">
            {/* Header heading */}
            <h1 className="lg:leading-[55.39px] leading-[45.39px] lg:font-[700] font-[400] lg:text-[40px] text-[30px] mb-10 sm:w-full">
              {t("header-heading")}{" "}
              <span className="text-[#F82BA9]">{t("excellence")}!</span>
            </h1>

            {/* Navigate CV */}
            <Link
              href="https://drive.google.com/file/d/11L27Gg283M9rb-UAeF6S1u8N9gYv9L9i/view?usp=sharing"
              target="_blank"
              className="bg-[#F82BA9] rounded-md px-10 py-4 text-white font-[400] relative"
            >
              {t("resume")}
              <i className="fa-solid ltr:ml-2 rtl:mr-2 rtl:scale-x-[-1] fa-arrow-up-right-from-square"></i>
            </Link>
          </div>

          <div className="lg:w-[30%] w-[90%] px-4 lg:px-0 lg:pt-0 pt-20">
            {/* Building image */}
            <Image
              src={header}
              alt={"Header Image"}
              width={350}
              quality={100}
              className="rounded-md lg:h-[600px] h-[300px] border-2 border-[#F82BA9] animate-bounce"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
