import Image from "next/image";
import arrow from "@/public/arrow.png"
import logo from "@/public/logo1.png"

export default function Footer(){
  return(
    <div className="lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] py-[100px] sm:min-h-[calc(100vh-92px)] min-h-[calc(100vh-52px)] gap-14 bg-[#043873] text-white flex-col flex justify-between">

      <div className="flex justify-between items-center md:flex-row flex-col gap-16">

      <div className="md:w-1/4 space-y-7">
      <div className="flex gap-3 items-center">
        <Image src={logo} alt="Image" className=""/>
        <h1 className="text-2xl font-bold">IB Shop</h1>
      </div>

      <p className="text-justify">IB Shop was created for the new ways we live and work. We make a better workspace around the world</p>
      </div>

<div className="lg:w-3/5 md:w-[65%] flex md:justify-between items-center w-full justify-around">

      <div className="space-y-3">
        <h1 className="md:text-xl font-bold sm:text-lg">Products</h1>
        <ul className="space-y-1">
          <li className="sm:text-sm text-xs">Overview</li>
          <li className="sm:text-sm text-xs">Pricing</li>
          <li className="sm:text-sm text-xs">Customers Stories</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h1 className="text-xl font-bold sm:text-lg">Resources</h1>
        <ul className="space-y-1">
          <li className="sm:text-sm text-xs">Blog</li>
          <li className="sm:text-sm text-xs">Guide and Tutorials</li>
          <li className="sm:text-sm text-xs">Help Center</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h1 className="text-xl font-bold sm:text-lg">Company</h1>
        <ul className="space-y-1">
          <li className="sm:text-sm text-xs">About Us</li>
          <li className="sm:text-sm text-xs">Career</li>
          <li className="sm:text-sm text-xs">Media List</li>
        </ul>
      </div>
      </div>
      

      </div>


      {/* right div */}

      <div className="border-t border-white">
    <h1 className="text-center py-6 text-xl font-bold">&copy; 2024 IB Shop LLC.</h1>
      </div>

    </div>
  )
}