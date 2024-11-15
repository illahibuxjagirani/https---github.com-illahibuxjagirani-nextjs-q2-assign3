import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Hero(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[100px] bg-[#043873] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center sm:gap-5 flex-col sm:flex-row gap-16">

      <div className="sm:space-y-[60px] space-y-6">
        <div className="space-y-3">

        
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl sm:leading-[87px] font-[700] text-white">Get More Done with IB Shop</h1>

        <p className="md:text-[18px] text-white text-justify sm:text-sm text-xs">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        </div>

        <button className="bg-[#4F9CF9] text-white md:p-5 sm:p-3 p-2 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p className="sm:text-lg text-sm">Try Whitepace free</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] w-full lg:w-[724px] md:w-[624px] sm:w-[424px h-[200px] lg:h-[400px] md:h-[300px] sm:h-[250px] ">

      </div>
    </div>
  )
}