import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Task(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[100px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center gap-16 justify-center w-full bg-[#043873] text-white">
      <div className="sm:space-y-[60px] space-y-4">
        <div className="space-y-4">

        
        <h1 className="lg:text-[72px] md:text-[62px] sm:text-[45px] text-[35px] lg:leading-[87.14px] md:leading-[67.14px]  sm:leading-[57.14px] leading-[41px] font-[700] text-center">Your work, everywhere you are</h1>

        <p className="sm:text-[18px] text-xs leading-[20px] text-center md:leading-[25px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!.</p>
        </div>

<div className="flex justify-center">
        <button className="bg-[#4F9CF9] text-white sm:p-5 p-2 flex items-center gap-2 rounded-lg hover:bg-[#4596fa] justify-center">
          <p>Try Taskey</p> 
          <Image src={arrow} alt="Image"/>
        </button>
        </div>
      </div>


      
    </div>
  )
}