import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Project(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[100px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center gap-16 sm:flex-row flex-col">
      <div className="sm:space-y-[60px] md:w-[66%] sm:w-[75%] space-y-5">
        <div className="space-y-4">

        
        <h1 className="lg:text-[72px] md:text-[52px] text-[42px] lg:leading-[87.14px] md:leading-[57.14px] leading-[47.14px] font-[700]">Project Management</h1>

        <p className="sm:text-[18px] sm:leading-[30px] text-xs text-justify">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        </div>

        <button className="bg-[#4F9CF9] text-white sm:p-5 p-2 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Get Started</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] w-full h-[200px] md:w-[724px] md:h-[400px] sm:w-[524px] sm:h-[300px]">

      </div>
    </div>
  )
}