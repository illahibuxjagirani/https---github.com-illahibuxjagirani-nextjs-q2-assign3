import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Hero(){
  return(
    <div className="px-[220px] py-[100px] bg-[#043873] min-h-[calc(100vh-92px)] flex items-center gap-5">
      <div className="space-y-[60px]">
        <div>

        
        <h1 className="text-6xl leading-[77.45px] font-[700] text-white">Get More Done with IB Shop</h1>

        <p className="text-[18px] text-white">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        </div>

        <button className="bg-[#4F9CF9] text-white p-5 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Try Whitepace free</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] w-[724px] h-[400px]">

      </div>
    </div>
  )
}