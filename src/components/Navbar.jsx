import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";




const Navbar = () => {


    const [toggle,setToggle]=useState(true)

     const handleToggle=()=>{

        setToggle(!toggle)


     }


  return (
    <div className="w-full  h-[60px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] ">DEFI</h1>
        </div>
        <div className=" hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        {/* Ham burger */}
        <div className="block md:hidden ">

            {/* <AiOutlineMenu size={30} className="text-white" /> */}
            {
                toggle ?  <AiOutlineMenu size={30} className="text-white cursor-pointer" onClick={()=> handleToggle()} /> : <AiOutlineClose size={30} className="text-white cursor-pointer"  onClick={()=> handleToggle()} />
            }
        </div>
        {/* mobile menu */}
        {
            !toggle ? <div className="  md:hidden w-full  bg-black text-white absolute top-[60px] left-0  flex justify-center text-center">
          <ul className="text-2xl">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="m-8 ">Use Defi</button>
          </ul>
        </div> :<></>
        }
        


      </div>
    </div>
  );
};

export default Navbar;