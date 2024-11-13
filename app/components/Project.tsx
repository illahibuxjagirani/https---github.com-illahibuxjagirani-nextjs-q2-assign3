import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Project(){
  return(
    <div className="px-[220px] py-[100px] min-h-[calc(100vh-92px)] flex items-center gap-16">
      <div className="space-y-[60px]">
        <div className="space-y-2">

        
        <h1 className="text-[72px] leading-[87.14px] font-[700]">Project Management</h1>

        <p className="text-[18px] leading-[30px]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        </div>

        <button className="bg-[#4F9CF9] text-white p-5 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Get Started</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] w-[724px] h-[400px]">

      </div>
    </div>
  )
}