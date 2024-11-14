import Image from "next/image";
import arrow from "@/public/arrow.png"
import logo from "@/public/logo.png"

export default function Work(){
  return(
    <div className="px-[220px] py-[10px] min-h-[calc(100vh-92px)] flex items-center gap-16 z-0">
      


      {/* rigth div */}

      <div className="w-2/3">

        <div className="w-[561px] h-[561px] border-red-500 border rounded-full relative">

        <p className="h-[60px] w-[60px] bg-[#FFDC4D] rounded-full absolute top-0 left-[140px]"> </p>
        <p className="h-[60px] w-[60px] bg-[#37A3FF] rounded-full absolute top-[130px] right-0"> </p>
        <p className="h-[60px] w-[60px] bg-[#FF5758] rounded-full absolute top-[230px] -left-[25px]"> </p>
        <p className="h-[60px] w-[60px] bg-[#37A3FF] rounded-full absolute bottom-2 left-[100px]"> </p>
        <p className="h-[60px] w-[60px] bg-[#3ff842] rounded-full absolute bottom-14 right-[50px]"> </p>


     

        <div className="w-[361px] h-[361px] border-red-500 border rounded-full absolute top-[100px] left-[100px]">
          
          <p className="h-[60px] w-[60px] bg-[#3ff842] rounded-full absolute -top-[20px] left-[140px]"> </p>
          <p className="h-[60px] w-[60px] bg-[#37A3FF] rounded-full absolute top-[130px] -right-[25px]"> </p>
          <p className="h-[60px] w-[60px] bg-[#37A3FF] rounded-full absolute top-[130px] -left-[25px]"> </p>
          <p className="h-[60px] w-[60px] bg-[#FFBF60] rounded-full absolute top-[320px] left-[150px]"> </p>
          <Image src={logo} alt="Image" className="absolute top-[140px] left-[150px]"/>
  
          </div>
          </div>

      </div>

      {/* left div */}
      <div className="space-y-[60px] w-1/2">
        <div className="space-y-2">

        
        <h1 className="text-[72px] leading-[87.14px] font-[700]">Work together</h1>

        <p className="text-[18px] leading-[30px]">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
</p>
        </div>

        <button className="bg-[#4F9CF9] text-white p-5 flex items-center gap-2 rounded-lg hover:bg-[#4596fa]">
          <p>Try it now</p> 
          <Image src={arrow} alt="Image"/>

        </button>
      </div>
    </div>
  )
}