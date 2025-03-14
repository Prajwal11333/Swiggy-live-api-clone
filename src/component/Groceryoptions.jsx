import React from "react"
import { GrocerGridCard } from "../Utils/Grocery"
import Grocerycard from "./Grocerycard"
export default function Grocery(){
    return(
        <>
          <div className=" w-[80%] container mx-auto mt-20">
               <h2  className="text-2xl font-bold">Shop groceries on Instamart</h2>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
       
               {
               GrocerGridCard.map((Grocery)=><Grocerycard key={Grocery.id} Grocery={Grocery} ></Grocerycard>)
                 }
            </div>
            </div>
        </>
    )
}