import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Task(){
  return(
    <div className="px-[220px] py-[100px] min-h-[calc(100vh-92px)] flex items-center gap-16 justify-center w-full bg-[#043873] text-white">
      <div className="space-y-[60px]">
        <div className="space-y-2">

        
        <h1 className="text-[72px] leading-[87.14px] font-[700] text-center">Your work, everywhere you are</h1>

        <p className="text-[18px] leading-[30px] text-center">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!.</p>
        </div>

<div className="flex justify-center">
        <button className="bg-[#4F9CF9] text-white p-5 flex items-center gap-2 rounded-lg hover:bg-[#4596fa] justify-center">
          <p>Try Taskey</p> 
          <Image src={arrow} alt="Image"/>
        </button>
        </div>
      </div>


      
    </div>
  )
}