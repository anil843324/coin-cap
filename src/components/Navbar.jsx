import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";




const Navbar = () => {


    const [toggle,setToggle]=useState(true)

     const handleToggle=()=>{

        setToggle(!toggle)


     }


  return (
    <div className="w-full  h-[60px] bg-slate-400">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
   
             <img src="https://coincap.io/static/logos/black.svg"  alt="logo"  className="w-16 h-16 cursor-pointer" />
        </div>
        <div className=" hidden md:flex">
          <ul className="flex  items-center cursor-pointer">
          <li>Coins</li>
            <li>Exchanges</li>
            <li>Swap</li>
           
          </ul>
        </div>
        {/* Ham burger */}
        <div className="block md:hidden ">

            {/* <AiOutlineMenu size={30} className="text-white" /> */}
            {
                toggle ?  <AiOutlineMenu size={30} className=" cursor-pointer" onClick={()=> handleToggle()} /> : <AiOutlineClose size={30} className="text-white cursor-pointer"  onClick={()=> handleToggle()} />
            }
        </div>
        {/* mobile menu */}
        {
            !toggle ? <div className="  md:hidden w-full  bg-black  absolute top-[60px] left-0  flex justify-center text-center">
          <ul className="text-2xl cursor-pointer ">
            <li>Coins</li>
            <li>Exchanges</li>
            <li>Swap</li>
           
          
          </ul>
        </div> :<></>
        }
        


      </div>
    </div>
  );
};

export default Navbar;