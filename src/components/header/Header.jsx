import { IoSearchOutline } from "react-icons/io5";
import "../../style/header.css"
import { MdOutlineLogin } from "react-icons/md";
import Login from "../login/Login";
import { useState , useContext } from "react";
// import { ConfiContext } from "../../routeConfi/ContextConfi";
import { Navigate , NavLink} from "react-router-dom";

const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    

    // const {statusLogin} = useContext(ConfiContext)

    const isOpen = () => {
        console.log("it clicks");
        setOpenModal(true)
        console.log("it clicks2");
    }


    return (
        <div>
            <section className="header-container">
                <p className="h-search-icon">  <IoSearchOutline /></p>
                <NavLink className="window-shopper" to={"/"}>Window Shopper</NavLink>
                <NavLink to={"/sign"} className="h-login-icon"  >logga in  <span><MdOutlineLogin />  </span></NavLink>
                {/* <div >
                <Login style={{display: !openModal? "block" : "none"}} /> 
                </div> */}
                
               
            </section>
        </div>
    )
}
export default Header