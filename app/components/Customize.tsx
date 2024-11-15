import Image from "next/image";
import arrow from "@/public/arrow.png"

export default function Customize(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[100px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center gap-10 flex-col sm:flex-row">
      <div className="sm:space-y-[60px] space-y-4">
        <div className="space-y-5">

        
        <h1 className="lg:text-[62px] text-[42px]  lg:leading-[67.14px] md:leading-[47.14px] sm:leading-[40.14px] leading-[40px] font-[700]">Customise it
        to your needs</h1>

        <p className="sm:text-[18px] md:leading-[30px] text-justify text-xs">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
</p>
        </div>

        <button className="bg-[#4F9CF9] text-white sm:p-5 p-2 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Let’s Go</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>


      {/* right div */}

      <div className="bg-[#C4DEFD] w-full h-[200px] md:w-[724px] md:h-[400px] sm:w-[924px] sm:h-[400px]">

      </div>
    </div>
  )
}