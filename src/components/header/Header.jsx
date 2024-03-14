import { IoSearchOutline } from "react-icons/io5";
import "../../style/header.css"
import { MdOutlineLogin } from "react-icons/md";



const Header = () => {

    return (
        <div>
            <section className="header-container">
                <p className="h-search-icon">  <IoSearchOutline /></p>
                <p>HOT TEA</p>
                <p className="h-login-icon">logga in  <span><MdOutlineLogin /></span></p>
               
            </section>
        </div>
    )
}
export default Header