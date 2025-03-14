import React, { useState } from "react"
import Restinfo from "./Restinfo"

export default function MenuCard({menuitem,foodselect}){
    
       const [isOpen , setIsOpen] = useState(true);


        // to deal with categories of the type of food
    if("categories" in menuitem){
        return(
            <>
            <div className="w-full">   
             <p className="text-2xl font-bold mb-4 pt-7">{menuitem.title}</p>
                <div>
                    {
                        menuitem?.categories?.map((item)=> <MenuCard key={item?.title} menuitem={item}></MenuCard>)
                    }
                </div>
            </div>
            </>
        )
    }

    
    //    button to drop up
       if(!isOpen){
       return(   
       <div className="w-full">
        <div className="flex justify-between w-full">
        <p className="text-2xl font-bold mb-4 pt-7">{menuitem.title}</p>
        <button  className="text-xl mr-10"  onClick={() => setIsOpen(()=>setIsOpen(!isOpen))}>{isOpen?'▼':'▲'}</button>
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
       )
       }
   
        if(foodselect==='veg'){
           return(     <>
            <div className="w-full mt-4">
               
           <div className="flex justify-between w-full">
                    <p className="text-3xl font-bold mb-4">{menuitem.title}</p>
                    <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
                    </div>
                <div>
            {
                // if isveg is 1 then veg is there else non veg filter logic
                menuitem?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><Restinfo key={items.card.info.id}  restData={items?.card?.info}></Restinfo>)
            }
                </div>
                <div className="h-5 bg-gray-200 mt-4 pt-4"></div>
            </div>
        </>)
        }
        if(foodselect==='nonveg'){
            return ( <>
                <div className="w-full mt-4">
                   
               <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-4">{menuitem.title}</p>
                        <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
                        </div>
                    <div>
                {
                    // if isveg is 1 then veg is there else non veg filter logic
                    menuitem?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><Restinfo key={items.card.info.id}  restData={items?.card?.info}></Restinfo>)
                }
                    </div>
                    <div className="h-5 bg-gray-200 mt-4 pt-4"></div>
                </div>
            </>)
        }

   
    return(
        <>
    <div className="w-full mt-4">
       
   <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuitem.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'˯'}</button>
            </div>
        <div>
    {
        // if isveg is 1 then veg is there else non veg filter logic
        menuitem?.itemCards?.map((items)=><Restinfo key={items.card.info.id}  restData={items?.card?.info} foodselect={foodselect}></Restinfo>)
    }
        </div>
        <div className="h-5 bg-gray-200 mt-4 pt-4"></div>
    </div>
</>
    )
}