import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Extension(){
  return(
    <div className="px-[220px] py-[100px] min-h-[calc(100vh-92px)] flex items-center gap-16 bg-[#043873] text-white">
      <div className="space-y-[60px]">
        <div className="space-y-2">

        
        <h1 className="text-[72px] leading-[87.14px] font-[700]">Use as Extension</h1>

        <p className="text-[18px] leading-[30px]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
</p>
        </div>

        <button className="bg-[#4F9CF9] text-white p-5 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Let’s Go</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] w-[724px] h-[400px]">

      </div>
    </div>
  )
}