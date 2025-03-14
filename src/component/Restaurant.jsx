import  React, { useEffect, useState } from "react";
import RestCard from "./RestCard"

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://thingproxy.freeboard.io/fetch/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     }

     fetchData();
    },[])
  
// shimmer effect to avoid the user experience low
    if(RestData.length===0){
        return <h1 className="h-full font-black text-4xl">Data is loading.....</h1>
    }
    // console.log(RestData);

    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }

        </div>
    )
}