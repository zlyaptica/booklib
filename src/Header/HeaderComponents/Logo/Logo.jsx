import logo from '../../img/logo.svg'
import {NavLink} from "react-router-dom"
import classes from './Logo.module.css'

const Logo = () => {
    return (
        <NavLink to="/" ><img src={logo} alt="logo" className={classes.logo} /></NavLink>
    )
}

export { Logo }