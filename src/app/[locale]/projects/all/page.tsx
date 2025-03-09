import Image from "next/image";
import portfolio from "../../../../../public/images/portfolio.png";
import exam from "../../../../../public/images/online-exam.png";
import commerceNext from "../../../../../public/images/e-commerce-next.png";
import commerceReact from "../../../../../public/images/e-commerce-react.png";
import commerceJs from "../../../../../public/images/e-commerce-js.png";
import crud from "../../../../../public/images/crud.png";
import angora from "../../../../../public/images/html.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function All() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-5">
        {/* First project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={portfolio} alt="portfolio image" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold my-4">Fares Anwar Portfolio</h1>

          {/* Button */}
          <Link href={"http://localhost:3000/en"} target="_blank" className="mt-3 dark:bg-black dark:text-white text-[18px] px-4 py-2 rounded-md">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Link>
        </div>

        {/* Second project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={commerceNext} alt="Flower App Image" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold my-4">Elevate Flower App</h1>

          {/* Button */}
          <Link href={"https://elevate-flower-app.vercel.app/en"} target="_blank" className="mt-3 dark:bg-black dark:text-white text-[18px] px-4 py-2 rounded-md">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Link>
        </div>

        {/* Third project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={commerceReact} alt="e-commerce App" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold my-4">E-commerce App</h1>

          {/* Button */}
          <Link href={"https://ecommerce-fares-anwars-projects.vercel.app/"} target="_blank" className="mt-3 dark:bg-black dark:text-white text-[18px] px-4 py-2 rounded-md">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Link>
        </div>

        {/* Fourth project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={exam} alt="online exam image" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold mt-4">Online Exam App</h1>

          {/* Button */}
          <Button className="mt-3 dark:bg-black dark:text-white text-[18px]">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Button>
        </div>

        {/* Fifth project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={commerceJs} alt="e-commerce App" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold mt-4">One Tech</h1>

          {/* Button */}
          <Button className="mt-3 dark:bg-black dark:text-white text-[18px]">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Button>
        </div>

        {/* Sixth project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={crud} alt="CRUD App" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold mt-4">Crud System</h1>

          {/* Button */}
          <Button className="mt-3 dark:bg-black dark:text-white text-[18px]">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Button>
        </div>

        {/* seventh project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={angora} alt="Angora App" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold mt-4">Angora</h1>

          {/* Button */}
          <Button className="mt-3 dark:bg-black dark:text-white text-[18px]">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Button>
        </div>
      </div>
    </>
  );
}
