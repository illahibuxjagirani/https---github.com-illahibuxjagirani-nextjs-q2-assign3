import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Extension(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[100px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center gap-16 bg-[#043873] text-white flex-col sm:flex-row">
      <div className="sm:space-y-[60px] space-y-4">
        <div className="space-y-2">

        
        <h1 className="md:text-[72px] text-[50px] md:leading-[87.14px] sm:leading-[50px] leading-[55px]  font-[700]">Use as Extension</h1>

        <p className="sm:text-[18px] text-xs sm:leading-[30px] text-justify">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
</p>
        </div>

        <button className="bg-[#4F9CF9] text-white sm:p-5 p-2 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Let’s Go</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] sm:w-[724px] sm:h-[400px] w-full h-[200px] rounded-lg">

      </div>
    </div>
  )
}