import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./component/Restaurant"
import Home from "./component/Home";
import { BrowserRouter,Routes,Route } from "react-router";
import Restaurantmenu from "./component/Resturantmenu";
import Searchfood from "./component/Searchfood";
import Secondaryhome from "./component/Secondayhome";
import stores from "./stores/stores";
import { Provider } from 'react-redux'
import Checkout from "./component/Checkout";


const element = ReactDOM.createRoot(document.getElementById('root'))

function App(){
return(
<>
{/* provider is used for to give access of global store everywhere */}
<Provider store={stores}>  
<BrowserRouter>
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route element={<Secondaryhome></Secondaryhome>}>
<Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
<Route path="/city/delhi/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
<Route path="/city/delhi/:id/search" element={<Searchfood></Searchfood>}></Route>
</Route>
<Route path="/Checkout" element={<Checkout></Checkout>}></Route>
</Routes>
</BrowserRouter>
</Provider>
</>
)
}
element.render(<App></App>)