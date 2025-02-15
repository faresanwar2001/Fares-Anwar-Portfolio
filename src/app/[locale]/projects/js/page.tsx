import { Button } from "@/components/ui/button";
import Image from "next/image";
import commerceJs from "../../../../../public/images/e-commerce-js.png";
import crud from "../../../../../public/images/crud.png";

export default function page() {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 my-5">
      {/* First project */}
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

      {/* Second project */}
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
    </div>
  );
}
