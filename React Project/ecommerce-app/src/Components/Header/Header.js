
import Login from "../Login/signin";
import logo from "../../Assests/logo.jpg";
import './Header.css';

function Header(){
        return(
            <>
            <div>
            <header  className="head">

                <div className="logo-left" >
                <img src={logo} alt="logo" />
                </div>

                <div className="head-title">
                <h1>SANDY'S SHOP</h1>
                </div>

                <div className="login-right">
                <Login/> 
                </div>           
            </header>
            </div>
            </>
        )
    }   

export default Header;