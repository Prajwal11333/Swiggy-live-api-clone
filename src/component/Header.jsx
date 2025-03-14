//   {/* conatiner mx-auto bring content center */}
//  {/* items center - is align item center kind in ts */}
import React from "react";
import { Link } from "react-router";
// first div swiggy logo
export default function Header(){
    return(
        <>
        <header className="bg-[#ff5200] font-Gilroy ">  
        <div className=" flex justify-between items-center py-8 container mx-auto max-w-[1360]">
                <img className="h-12 w-48" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
               
                <div className=" text-white text-base font-bold flex gap-10 items-center">
                    <a target="_blank"  href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
                    <a target="_blank"  href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a className="border border-white  py-3 px-4 rounded-2xl"   target="_blank"    href="">Get the app</a>
                    <a className="border border-white  bg-black  py-3 px-4 rounded-2xl"  target="_blank" href="">Sign in</a>
                </div>
            </div>
            <div className="pt-16 pb-9 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[60%] text-5xl text-white font-bold conatiner mx-auto text-center">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] conatiner mx-auto flex gap-5 mt-5">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi,India"></input>
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for resturants, items or more"></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex">
               <Link to={"/restaurant"}>
               <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
               </Link>
              
             
               <a target="_blank" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
               </a>
               <a target="_blank" href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
               </a>
               <a target="_blank" href="https://www.swiggy.com/genie">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
               </a>
            </div>
        </header>
        </>
    )
}

