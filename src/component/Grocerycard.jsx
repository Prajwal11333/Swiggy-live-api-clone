import React from "react"

export default function Grocerycard({Grocery}){
    return(
        <div className="flex-none">
         <a href={Grocery?.action?.link}>
         <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Grocery?.imageId}></img>
         </a>
         <h2>{Grocery?.action?.text}</h2>
        </div>
    )
}