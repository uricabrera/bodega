import Logo from "./../media/headerlogo.png";
import {BiUserCircle,BiStore,BiCart,BiHome,BiX} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useEffect, useRef,useState,useContext} from "react";
import {GiHamburgerMenu,GiCancel} from "react-icons/gi";
import CartWidget from "./CartWidget";


const Header = () => {
    const headerRef = useRef(null);


    const [isMobileNavbarOn, setIsMobileNavbarOn] = useState(false);
    const [isScrollOn,setIsScrollOn] = useState(false);




    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1){
                headerRef.current.classList.add("header_is_fixed");
                setIsScrollOn(true);
            }else{
                headerRef.current.classList.remove("header_is_fixed");
                setIsScrollOn(false);
            }
            return () =>{
                window.removeEventListener("scroll");
            };
        })
    },[]);






    return(
        <>
            <header ref={headerRef} className="header">
                <img src={Logo} alt="Droguería Sistemas Del Sol" className="header_logo"/>
                <nav>
                    <div>
                        <ul>
                            <Link to="/dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}><li><BiHome/>Inicio</li></Link>
                            <Link to="/dashboard/store" style={{ color: 'inherit', textDecoration: 'inherit'}}><li><BiStore/>Productos</li></Link>
                            <CartWidget/>
                            <li><BiUserCircle/>Cuenta</li>
                            <span className="header_nav_mobile" onClick={() => setIsMobileNavbarOn(!isMobileNavbarOn)}>
                            {
                                isMobileNavbarOn ? <GiCancel/> : <GiHamburgerMenu/>
                            }
                        </span>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className={`header_nav_mobile_body ${isMobileNavbarOn ? 'header_nav_mobile_body_active' : ''} ${isScrollOn && isMobileNavbarOn ? 'header_nav_mobile_body_active_scroll' : ''}`}>
                <h1>
                    Navbar mobile
                </h1>
            </div>
        </>
    )
}

export default Header;