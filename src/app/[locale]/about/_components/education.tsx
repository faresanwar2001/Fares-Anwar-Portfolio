export default function Education() {
  return (
    <>
      <div className="text-black dark:text-white">
        <h1 className="text-center text-5xl relative tracking-[3px] font-semibold mb-14 mt-24">
          Education
          <div className="w-[50px] h-[5px] flex justify-center items-center absolute left-[48%] rounded bg-[#F82BA9] "></div>
        </h1>
      </div>

      {/* Education section */}
      <div className="container mx-auto flex gap-8 lg:w-[60%] w-[80%]">
        <div className="W-[10%]">
          <i className="fa-solid lg:rtl:ml-2  rtl:scale-x-[-1] text-[#F82BA9] text-4xl mr-4 fa-chevron-right"></i>
        </div>
        <div className="">
          <h2 className="lg:text-4xl text-2xl font-semibold mb-6">Computer science</h2>
          <p className="mb-1 w-full">
            Bachelor degree In Computer Science at Faculty of Computer and
            Information Sciences
          </p>
          <div className="flex gap-2">
            <i className="fa-solid text-[18px] text-gray-600 mr-2 fa-calendar"></i>
            <span >2019-2024 | AOU University</span>
          </div>
          <div className="flex">
            <span className="font-medium mt-2">
              I was awarded a certified degree from the UK, validated under the
              authority of the Royal Charter of The Open University,2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
