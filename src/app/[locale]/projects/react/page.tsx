import Image from "next/image";
import react from "../../../../../public/images/e-commerce-react.png";
import Link from "next/link";

export default function React() {
  return (
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-5">
         <div className="px-10 py-5 dark:bg-white dark:text-black rounded-md border-2 border-[#F82BA9]">
          {/* Building image */}
          <Image src={react} alt="e-commerce App" className="w-full" />
          {/* Heading */}
          <h1 className="text-3xl font-semibold my-4">E-commerce App</h1>

          {/* Button */}
          <Link href={"https://ecommerce-fares-anwars-projects.vercel.app/"} target="_blank" className="mt-3 dark:bg-black dark:text-white text-[18px] px-4 py-2 rounded-md">
            Visit{" "}
            <i className="fa-solid text-[16px] fa-arrow-right rtl:scale-x-[-1]"></i>
          </Link>
        </div>
      </div>
  );
}
