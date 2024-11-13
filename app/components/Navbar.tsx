
export default function Navbar(){
  return(
    <div className="h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center sticky top-0">

      {/* left div */}
      <div>
<h1 className="text-white text-2xl">IB Shop</h1>
      </div>


{/* right dev */}
      <div className="flex justify-between w-1/2 items-center">

  <ul className="flex gap-6 text-white">
    <li className="cursor-pointer">Products</li>
    <li className="cursor-pointer">Solutions</li>
    <li className="cursor-pointer">Resources</li>
    <li className="cursor-pointer">Pricing</li>
  </ul>

    <button className="bg-[#FFE492] py-4 px-10 rounded-lg hover:bg-[#f8d876] transition-all duration-75 font-bold">Login</button>

</div>

      </div>
  )
}