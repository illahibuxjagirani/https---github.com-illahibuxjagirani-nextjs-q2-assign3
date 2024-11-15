import Image from "next/image";
import arrow from "@/public/arrow.png"
import logo from "@/public/logo.png"

export default function Work(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[10px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center lg:gap-20 md:gap-10 sm:gap-5 z-0 flex-col sm:flex-row gap-10">
      


      {/* rigth div */}

      <div className="sm:w-2/3">

        <div className="lg:w-[561px] lg:h-[561px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] border-red-500 border rounded-full relative">

         <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] h-[30px] w-[30px] bg-[#FFDC4D] rounded-full absolute lg:top-0 lg:left-[140px] md:-top-3 md:left-[140px] -top-3 left-[140px]"> </p>

        <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] h-[30px] w-[30px] md:w-[40px] bg-[#37A3FF] rounded-full absolute lg:top-[130px] lg:right-0 md:top-[130px] md:-right-3 top-[130px] -right-3"> </p>

        <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] h-[30px] w-[30px] md:w-[40px] bg-[#FF5758] rounded-full absolute lg:top-[230px] lg:-left-[25px] md:top-[230px] md:-left-[15px] top-[160px] -left-[10px]"> </p>

        <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] h-[30px] w-[30px] md:w-[40px] bg-[#37A3FF] rounded-full absolute lg:bottom-2 lg:left-[100px] md:bottom-0 md:left-[90px] -bottom-[8px] left-[100px]"> </p>

        <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] h-[30px] w-[30px] md:w-[40px] bg-[#3ff842] rounded-full absolute lg:bottom-14 lg:right-[50px] md:bottom-14 md:right-[20px] bottom-8 right-[20px]"> </p> 


     

        <div className="lg:w-[361px] lg:h-[361px] md:w-[200px] md:h-[200px] w-[200px] h-[200px] border-red-500 border rounded-full absolute md:top-[100px] md:left-[100px] top-[50px] left-[50px]">
          
          <p className="lg:h-[60px] lg:w-[60px] md:h-[40px]  md:w-[40px] h-[30px] w-[30px] bg-[#3ff842] rounded-full absolute lg:-top-[20px] lg:left-[140px] md:-top-[18px] md:left-[80px] -top-[14px] left-[80px]"> </p>

          <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] h-[30px] w-[30px] bg-[#37A3FF] rounded-full absolute lg:top-[130px] lg:-right-[25px] md:top-[80px] md:-right-[20px] top-[80px] -right-[15px]"> </p>

          <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] h-[30px] w-[30px] bg-[#37A3FF] rounded-full absolute lg:top-[130px] lg:-left-[25px] md:top-[80px] md:-left-[20px] top-[80px] -left-[15px]"> </p>

          <p className="lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] h-[30px] w-[30px] bg-[#FFBF60] rounded-full absolute lg:top-[320px] lg:left-[150px] md:-bottom-[20px] md:left-[80px] -bottom-[15px] left-[80px]"> </p>

          <Image src={logo} alt="Image" className="absolute lg:top-[145px] lg:left-[140px] md:top-[80px] md:left-[70px] top-[80px] left-[70px]"/>
  
          </div>
          </div>

      </div>

      {/* left div */}
      <div className="sm:space-y-[60px] space-y-4">
        <div className="space-y-2">

        
        <h1 className="lg:text-[52px] text-[35px]  lg:leading-[57.14px] md:leading-[47.14px] font-[700]">Work together</h1>

        <p className="lg:text-[18px] md:text-sm sm:text-xs md:leading-[30px] leading-[20px] text-justify">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
</p>
        </div>

        <button className="bg-[#4F9CF9] text-white sm:p-5 p-2 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Try it now</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>
    </div>
  )
}