import React from "react"
import Header from "./Header"
import Foodoptions from "./Foodoptions"
import Groceryoptions from "./Groceryoptions"
import Dinedata from "./Dinedata"

export default function Home(){
    return(
        <>
        <Header></Header>
        <Foodoptions></Foodoptions>
        <Groceryoptions></Groceryoptions>
        <Dinedata></Dinedata>
        </>
    )
}