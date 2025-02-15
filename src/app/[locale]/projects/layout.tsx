import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

type ProjectLayoutProps = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <div className="text-black dark:text-white">
        <h1 className="text-center text-5xl relative tracking-[3px] font-semibold my-11">
          MY PROJECTS
          <div className="w-[50px] h-[5px] flex justify-center items-center absolute left-[48%] rounded bg-[#F82BA9] "></div>
        </h1>

        {/* Projects section */}
        <div className="container mx-auto px-8 lg:px-0">
          <div className="">
            <ul className="flex lg:flex-nowrap flex-wrap lg:gap-8 gap-4 ">
              <li>
                <Link className="font-semibold" href="/projects/all">
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    All
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/react"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    React.js
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/next"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    Next.js
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/js"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    Vanilla Js
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/tailwind"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    Tailwind
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/typescript"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    Typescript
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/bootstrap"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    Bootstrap
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold"
                  target="_self"
                  href="/projects/angular"
                >
                  <Button
                    className="border-black dark:border-white px-12"
                    variant={"outline"}
                  >
                    Angular
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects content */}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </>
  );
}
