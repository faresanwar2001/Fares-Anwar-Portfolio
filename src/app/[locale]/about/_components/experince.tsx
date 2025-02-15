export default function Experience() {
  return (
    <>
      <div className="text-black dark:text-white">
        <h1 className="text-center text-5xl relative tracking-[3px] font-semibold mb-14 mt-24">
          Experience
          <div className="w-[50px] h-[5px] flex justify-center items-center absolute left-[48%] rounded bg-[#F82BA9] "></div>
        </h1>
      </div>

      {/* First Experience */}
      <div className="container mx-auto gap-8 flex lg:w-[60%] w-[80%]">
        <div>
          <i className="fa-solid lg:rtl:ml-2  rtl:scale-x-[-1] text-[#F82BA9] text-4xl mr-4 fa-chevron-right"></i>
        </div>
        <div>
          <h2 className="lg:text-3xl text-xl font-semibold mb-2">Frontend Developer <span className="text-[#F82BA9]">@Elevate Tech</span></h2>
          <div className="flex gap-2">
            <i className="fa-solid text-[18px] text-gray-600 mr-2 fa-calendar"></i>
            <span>2024 - Present</span>
          </div>
        </div>
      </div>

      {/* Second Experience */}
      <div className="container mx-auto gap-8 flex lg:w-[60%] w-[80%] my-8">
        <div>
          <i className="fa-solid lg:rtl:ml-2  rtl:scale-x-[-1] text-[#F82BA9] text-4xl mr-4 fa-chevron-right"></i>
        </div>
        <div>
          <h2 className="lg:text-3xl text-xl  font-semibold mb-2">Internship Frontend Developer <span className="text-[#F82BA9]">@National telecommunication institute</span></h2>
          <div className="flex gap-2">
            <i className="fa-solid text-[18px] text-gray-600 mr-2 fa-calendar"></i>
            <span>Jul.2024 - Sep.2024</span>
          </div>
        </div>
      </div>
    </>
  );
}
