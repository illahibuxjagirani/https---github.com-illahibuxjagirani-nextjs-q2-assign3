
export default function Navbar(){
  return(
    <div className="sm:h-[92px] h-[52px] md:py-4 sm:py-2 lg:px-[120px] md:px-[50px] sm:px-[30px] px-[10px] bg-[#3693fe] flex justify-between items-center sticky top-0 z-10 sm:gap-0 gap-2">

      {/* left div */}
      <div>
<h1 className="text-white sm:text-2xl text-sm">IB Shop</h1>
      </div>


{/* right dev */}
      <div className="flex justify-between lg:w-2/3 md:w-3/4 sm:w-4/5 items-center sm:gap-0 gap-3">

  <ul className="flex md:gap-6 sm:gap-3 text-white sm:text-lg text-xs gap-2">
    <li className="cursor-pointer">Products</li>
    <li className="cursor-pointer">Solutions</li>
    <li className="cursor-pointer">Resources</li>
    <li className="cursor-pointer">Pricing</li>
  </ul>

    <button className="bg-[#FFE492] lg:py-4 md:py-3 sm:py-1 lg:px-10 md:px-7 sm:px-5 px-1 py-1 rounded-lg hover:bg-[#f8d876] transition-all duration-75 font-bold sm:text-lg text-xs">Login</button>

</div>

      </div>
  )
}