import { NavLink } from "react-router-dom"
import classes from './Navigation.module.css'
import {Search} from "../Search/Search";
import { useSelector } from "react-redux";


const Navigation = (props) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <nav className={classes.header__nav + ' ' + (props.isNavOpen ? classes.header__navActive : '')}>
        <ul className={classes.header__list}>
            <li className={classes.header__item}>
                <Search />
            </li>
            <li className={classes.header__item}>
                {isAuthenticated ? 
                    <NavLink onClick={() => { props.setIsNavOpen(!props.isNavOpen) }} to="/createpost" className={classes.header__link}>Создать пост</NavLink>
                : 
                    null
                }
            </li>
            <li className={classes.header__item}>
                <NavLink onClick={() => { props.setIsNavOpen(!props.isNavOpen) }} to="/toprate" className={classes.header__link}>Топ рейтинга</NavLink>
            </li>
            <li className={classes.header__item}>
                {isAuthenticated ? 
                    <NavLink onClick={() => { props.setIsNavOpen(!props.isNavOpen) }} to="/profile" className={classes.header__link}>Профиль</NavLink> 
                : 
                    <NavLink onClick={() => { props.setIsNavOpen(!props.isNavOpen) }} to="/signin" className={classes.header__link}>Войти</NavLink>
                }                          
            </li>
        </ul>
        <div className={classes.header__navClose} onClick={() => { props.setIsNavOpen(!props.isNavOpen) }}>
            <span className={classes.header__navCloseLine} />
            <span className={classes.header__navCloseLine} />
        </div>
    </nav>
    )
  }
  
  export { Navigation }

