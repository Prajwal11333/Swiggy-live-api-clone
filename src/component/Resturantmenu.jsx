import { useParams } from "react-router"
import { useEffect,useState } from "react";
import { Link } from "react-router";
import React from "react";
import MenuCard from "./MenuCard";

export default function Restaurantmenu(){
    // useParams is a hook from react-router-dom that allows you to access URL parameters in a React component.
    //  It is mainly used for dynamic routing where parts of the URL act as variables
    let {id} = useParams();
    const [select,setselect] = useState(null) 
  console.log(id)
    
  const [RestData, setRestData] = useState([])
    useEffect(()=>{
      
       async function fetchData() {
          
          const proxyServer = "https://thingproxy.freeboard.io/fetch/"
          const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
          const response = await fetch(proxyServer+swiggyAPI);
          const data = await response.json();
          const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
          // now should filter only those cards which title in it as it will define content
          // whichever card have title key it will filter out
       
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
       }
  
       fetchData();
      },[])
      
    console.log(RestData)
    return(
        <div>
            <div className=" w-[80%] mb-20 mt-20 mx-auto" >
              <Link to={`/city/delhi/${id}/search`}>
             <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
             </Link>
           </div>

          <div className=" w-[80%] mb-20 mt-20 mx-auto" >
            <button className={`text-2xl py-1.5 px-6 mr-2 border rounded-2xl ${select==="veg"? "bg-green-600": "bg-gray-300"} `} onClick={()=>setselect(select==='veg'?null:'veg')}>Veg</button>
            <button className={`text-2xl py-1.5 px-4 border rounded-2xl   ${select==='nonveg'?"bg-red-400":"bg-gray-200"}`}onClick={()=>setselect(select==='nonveg'?null:'nonveg')}>Non-Veg</button>
        </div>

   <div className="w-[80%] mx-auto">
    {
      RestData.map((menuitem)=><MenuCard key={menuitem?.card?.card?.title} menuitem={menuitem?.card?.card} foodselect={select}></MenuCard>)
    }

   </div>
        </div>
    )
}


