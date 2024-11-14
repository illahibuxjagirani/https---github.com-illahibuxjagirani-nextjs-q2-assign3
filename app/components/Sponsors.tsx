import Image from "next/image";
import arrow from "@/public/arrow.png"
import apple from "@/public/Apple.png"
import google from "@/public/google.png"
import miscrosoft from "@/public/mirscrosoft.png"
import slack from "@/public/slack.png"

export default function Sponsors(){
  return(
    <div className="px-[220px] py-[100px] min-h-[calc(100vh-92px)] flex items-center gap-16 justify-center w-full  ">
      <div className="space-y-[60px] w-full">
        <div className="space-y-2">

        
        <h1 className="text-[72px] leading-[87.14px] font-[700] text-center">Our Sponsors</h1>

       
        </div>

<div className="flex justify-between w-full flex-col md:flex-row gap-16 items-center">
       <Image src={apple} alt="Image"/>
       <Image src={google} alt="Image"/>
       <Image src={slack} alt="Image"/>
       <Image src={miscrosoft} alt="Image"/>
       
        </div>


      </div>


      
    </div>
  )
}