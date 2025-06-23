
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";

function Lay(){
    return(
         <>
         
            <Header />
           
            <section>
                <Outlet/>
            </section>
             <Footer />
           
            </>
           
        );
    }

   
           

export default Lay;