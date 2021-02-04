import logo from '../../img/logo.svg'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="/" ><img src={logo} alt="logo" /></NavLink>
    )
}

export { Logo }