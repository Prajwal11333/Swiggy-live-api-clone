import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
export default function RestHeader(){
   
    const counter = useSelector((state)=>state.cartSlicer.count)
    // console.log(counter.length)

    return(
        
        <div className=" w-[80%] container mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center rounded-xl">
            <div>
                <p className="text-orange-400 font-bold ">Swiggy</p>
            </div>
            <Link to="/Checkout">
            <div>
                <p className="font-bold text-black">Cart: {`(${counter})`}</p>
                
            </div>
            </Link>
        </div>
        
    )
}