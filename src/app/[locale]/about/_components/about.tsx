import Image from "next/image";
import about from "../../../../../public/images/main.jpg";
import { useTranslations } from "next-intl";
import Education from "./education";
import Experience from "./experince";


export default function AboutSection() {
    // Translation
  const t = useTranslations();

  return (
    <>
        <div className="flex lg:justify-between justify-center container mx-auto lg:flex-nowrap flex-wrap  my-5">
          <div className="lg:w-[50%] hidden lg:block">
            {/* Building image */}
            <Image src={about} alt="About Image" className="rounded-md border-2 border-[#F82BA9]" />
          </div>

          <div className="lg:w-[50%] w-[100%] px-4 lg:px-0 ">
            {/* About heading */}
            <h1 className="text-2xl mb-3 font-[500]">{t("react-developer")}</h1>

            {/* About me */}
            <p >
              {t("about-description")}
            </p>
            <div className="grid lg:grid-cols-2 my-3 grid-cols-1">
              {/* Degree */}
              <p className="flex items-center">
                <i className="fa-solid rtl:ml-2 rtl:scale-x-[-1] text-[#F82BA9]  mr-2 fa-chevron-right"></i>
                <span className="font-semibold ltr:mr-2 rtl:ml-2">{t("degree")}</span> {t("bachelor")}
              </p>

              {/* Email */}
              <p className="flex items-center">
                <i className="fa-solid rtl:ml-2 rtl:scale-x-[-1] text-[#F82BA9] mr-2  fa-chevron-right"></i>
                <span className="font-semibold ltr:mr-2 rtl:ml-2">{t("email")}</span>{" "}
                faresaof20@gmail.com
              </p>

               {/* Country */}
               <p className="flex items-center">
                <i className="fa-solid rtl:ml-2 rtl:scale-x-[-1] text-[#F82BA9] mr-2 fa-chevron-right"></i>
                <span className="font-semibold ltr:mr-2 rtl:ml-2">{t("country")}</span>{" "}
                {t("cairo")}
              </p>

               {/* Phone */}
               <p className="flex items-center">
                <i className="fa-solid rtl:ml-2 rtl:scale-x-[-1] text-[#F82BA9] mr-2 fa-chevron-right"></i>
                <span className="font-semibold ltr:mr-2 rtl:ml-2">{t("phone")}</span>{" "}
                +01002086928
              </p>

               {/* Freelancer */}
               <p className="flex items-center">
                <i className="fa-solid rtl:ml-2 rtl:scale-x-[-1] text-[#F82BA9] mr-2 fa-chevron-right"></i>
                <span className="font-semibold ltr:mr-2 rtl:ml-2">{t("freelancer")}</span>{" "}
                {t("available")}
              </p>
            </div>

            {/* More description */}
            <p className="mb-11">
            {t("more-description")}
            </p>
          </div>

        </div>

        <div className="my-11">
          {/* Experience */}
          <Experience/>

          {/* Education */}
          <Education/>
          </div>
    </>
  );
}
