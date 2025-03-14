import React from "react";
import { imageGridCards } from "../Utils/FoodData";
import Foodcard from "./Foodcard";

export default function Foodoptions() {
    return (
        
        <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3 mb-2 ">
          {
            imageGridCards.map((FoodData)=><Foodcard key={FoodData.id} foodData={FoodData}></Foodcard>)
          }
        </div>
    );
}


