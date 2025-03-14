import React from "react";
import RestHeader from "./RestHeader";
import { Outlet } from "react-router";

export default function Secondaryhome(){
    return(
        <>
        <RestHeader></RestHeader>
        {/* outlet is used for to the next path render as this it will be rendered example resturant where header will fixed */}
        <Outlet></Outlet>
        </>
    )
}