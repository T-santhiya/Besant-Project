
import Lay from "../Layout/layout";
import Categories from '../MainMenu/categories'
import Jewel from "../MainMenu/jewelery";
import Elec from "../MainMenu/electronics";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Menswear from "../MainMenu/menswear";
import Womenswear from "../MainMenu/womenswear";
import Details from "../MainMenu/details";
import AllProducts from "../MainMenu/allproducts";


function Routerex(){
        return(
            <>
         
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Lay />}>
        <Route index element={<Categories />}/>
        <Route path="/jewelery" element={<Jewel />}/>
        <Route path="/electronics" element={<Elec />}/>
        <Route path="/men's clothing" element={<Menswear />}/>
        <Route path="/women's clothing" element={<Womenswear />}/>
        <Route path="/prodDetails/:id" element={<Details />}/>
        <Route path="/products" element={<AllProducts />}/>


        </Route>
      </Routes>
    </BrowserRouter>
    </>
            
 
)
}

export default Routerex;