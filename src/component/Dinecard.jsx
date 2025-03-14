import React from "react"
export default function Dinecard({data}){
    return(
        <>
        <div className="flex-none max-w-sm">
        <a target="_blank" href={data.cta.link}>
            <div className="relative">
            <img  className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ data?.info?.mediaFiles[0]?.url}></img>
              {/* Gradient overlay behind the text */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          {/* Text with higher z-index */}
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {data.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {data?.info?.rating?.value}
          </p>
          
            </div>
       </a>
        </div>
        </>
    )
}