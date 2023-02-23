import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'
import menu from '../logo/list.svg'


const Header = () => {
    return ( 
        <div className="header">
            <div className="headertext">
                <img src={logo} width="42" alt="logo-jpg"></img>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
            <div className="hamburgerMenu">
                <img src={logo} width="35" height="35" alt="logo-jpg"></img>
                <input type="checkbox" id="ham"/>
                <label for="ham" class="lines">
                    <div className="extra">
                        <nav className="nav-link">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                    <img src={menu} width="30" alt="list.svd"></img>
                </label>
            </div>
            
        </div>
     );
}
 
export default Header;