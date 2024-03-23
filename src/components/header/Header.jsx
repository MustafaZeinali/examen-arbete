import { IoSearchOutline } from "react-icons/io5";
import "../../style/header.css"
import { MdOutlineLogin } from "react-icons/md";
import Login from "../Login";
import { useState , useContext } from "react";
// import { ConfiContext } from "../../routeConfi/ContextConfi";

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
                <p>HOT TEA</p>
                <p className="h-login-icon" onClick={isOpen} >logga in  <span><MdOutlineLogin />  </span></p>
                {/* <div >
                <Login style={{display: !openModal? "block" : "none"}} /> 
                </div> */}
                
               
            </section>
        </div>
    )
}
export default Header