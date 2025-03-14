import React from "react"
import {dineoutRestaurants} from "../Utils/DineData"
import Dinecard from "./Dinecard"
export default function Dinedata(){
    return(
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <p className="text-3xl font-bold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
        { 
            dineoutRestaurants.map((data)=><Dinecard key={data?.info?.id} data={data}></Dinecard>)
        }
        </div>
        </div>
    )
}