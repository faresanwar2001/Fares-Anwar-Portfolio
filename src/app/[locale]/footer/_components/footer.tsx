import { Link } from "@/i18n/routing";

export default function FooterSection() {
  return (
    <>
      <div className="flex lg:flex-row lg:justify-between justify-center items-center lg:flex-nowrap flex-wrap py-5 dark:text-white flex-col">
        {/* Copy Right */}
        <div className="mb-2 lg:mb-0">
          <p className="text-xl">
            2025 <i className="fa-regular text-[#F82BA9] fa-copyright"></i> All
            Right Reserved
          </p>
        </div>

        {/* Social */}
        <div className="mb-2 lg:mb-0">
          <p className="text-xl" >
            Build with <i className="fa-regular text-[#F82BA9] fa-heart"></i> By{" "}
            <Link href="https://www.linkedin.com/in/fares-anwar73/" target="_blank" className="underline">
              Fares
            </Link>{" "}
          </p>
        </div>

        {/* Welcome */}
        <div className="mb-2 lg:mb-0">
          <p className="text-xl">Say Hello</p>
        </div>
      </div>
    </>
  );
}
