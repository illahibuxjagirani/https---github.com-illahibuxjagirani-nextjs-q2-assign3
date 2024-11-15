import Image from "next/image";
import arrow from "@/public/arrow.png"
import apple from "@/public/Apple.png"
import google from "@/public/google.png"
import miscrosoft from "@/public/mirscrosoft.png"
import slack from "@/public/slack.png"

export default function Sponsors(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px]  px-[10px] py-[100px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] flex items-center gap-16 justify-center w-full  ">
      <div className="space-y-[60px] w-full">
        <div className="">

        
        <h1 className="md:text-[72px] sm:text-[52px] text-[40px] sm:leading-[87.14px] leading-10 font-[700] text-center">Our Sponsors</h1>

       
        </div>

<div className="flex justify-between w-full flex-col md:flex-row gap-10 items-center">
       <Image src={apple} alt="Image" height={50} width={50}/>
       <Image src={google} alt="Image" height={150} width={150}/>
       <Image src={slack} alt="Image" height={150} width={150}/>
       <Image src={miscrosoft} alt="Image" height={150} width={150}/>
       
        </div>


      </div>


      
    </div>
  )
}