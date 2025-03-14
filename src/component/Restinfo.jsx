import React, { useEffect, useState } from "react"
import { addItems,IncrementItems,Decrementitems } from "../stores/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function Restinfo({restData}){


    const dispatch = useDispatch();
    // const[opt,setopt] = useState(0);
    // to avoid same name food reptative add just compare it with cart one
    // const items = useSelector(state=>state.cartSlicer.items)
    // const element = items.find (item=>item.id===restData.id)
    // const count = element?element.quantity:0;
     const items = useSelector(state=>state.cartSlicer.items);
    
      const element = items.find(item=>item.id===restData.id);
      const count = element? element.quantity:0;
   



    function handleAdditems(){
      
    // sending data to the store telling to additems as payload of restData
    dispatch(addItems(restData))
    setcount(1)
    } 

    function handleIncrementitems(){
      
        // sending data to the store telling to incremnet
        dispatch(IncrementItems(restData))
        setcount(count+1)
    }
    
    function handleDecrementitems(){
           // sending data to the store telling to decrement
        dispatch(Decrementitems(restData))
        setcount(count-1)
    }
    

  
    return(
        <>
        <div className="w-full flex justify-between mb-5 pb-5">
            <div className="w-[70%]">
                <p className="text-xl text-gray-700 font-semibold">{restData?.name}</p>
                {/* default price true means that will excute else restdata.price */}
                <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
                <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>
                    {restData?.description} 
                </p>
            </div>
            <div className="w-[20%] relative">
                <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId}></img>
                {
                    count===0?( <button className="absolute bottom-1 left-20 rounded-xl text-xl text-green-600 px-6 py-2 shadow-md border border-white bg-white" onClick={()=>handleAdditems()}>ADD</button>):(
                        <div className=" absolute bottom-1 left-20 flex gap-3 rounded-xl text-2xl text-green-600  px-6 py-2 shadow-md border border-white bg-white">
                          <button className=" hover:bg-gray-50" onClick={()=>handleIncrementitems()}>+</button>
                          <span>{count}</span>
                          <button className=" hover:bg-gray-50" onClick={()=>handleDecrementitems()}>-</button>
                        </div>
                    )
                }
               
            </div> 
        </div>
        <hr className="py-2 bg-gray-50 mt-4 mb-4" ></hr>
        </>
    )
}


