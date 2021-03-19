import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.css'
import {Search} from '../Search/Search'
import {useSelector} from 'react-redux'


const Navigation = (props) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <nav className={classes.nav + ' ' + (props.isNavOpen ? classes.navActive : '')}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <Search/>
                </li>
                <li className={classes.item}>
                    {isAuthenticated ?
                        <NavLink onClick={() => {
                            props.setIsNavOpen(!props.isNavOpen)
                        }} to="/createpost" className={classes.link}>Создать пост</NavLink>
                        :
                        null
                    }
                </li>
                <li className={classes.item}>
                    <NavLink onClick={() => {
                        props.setIsNavOpen(!props.isNavOpen)
                    }} to="/toprate" className={classes.link}>Топ рейтинга</NavLink>
                </li>
                <li className={classes.item}>
                    {isAuthenticated ?
                        <NavLink onClick={() => {
                            props.setIsNavOpen(!props.isNavOpen)
                        }} to="/profile" className={classes.link}>Профиль</NavLink>
                        :
                        <NavLink onClick={() => {
                            props.setIsNavOpen(!props.isNavOpen)
                        }} to="/signin" className={classes.link}>Войти</NavLink>
                    }
                </li>
            </ul>
            <div className={classes.navClose} onClick={() => {
                props.setIsNavOpen(!props.isNavOpen)
            }}>
                <span className={classes.navCloseLine}/>
                <span className={classes.navCloseLine}/>
            </div>
        </nav>
    )
}

export {Navigation}

