import { Button } from "@/components/ui/button";
import Image from "next/image";
import commerceNext from "../../../../../public/images/e-commerce-next.png";
import onlineExam from "../../../../../public/images/online-exam.png";
import Link from "next/link";

export default function Next() {
  return (
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-5">
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

        {/* Second project */}
        <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={onlineExam} alt="Online Exam" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold mt-4">Online Exam App</h1>

          {/* Button */}
          <Button className="mt-3 dark:bg-black dark:text-white text-[18px]">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Button>
        </div>
      </div>
  );
}
