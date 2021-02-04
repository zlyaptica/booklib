import { NavLink } from "react-router-dom"
import classes from './Navigation.module.css'


const Navigation = (props) => {
    return (
        <nav className={classes.header__nav + ' ' + (props.isNavOpen ? classes.header__navActive : '')}>
        <ul className={classes.header__list}>
            <li className={classes.header__item}>
                <form className={classes.searchForm}>
                    <fieldset className={classes.searchForm__wrap}>
                        <p className={classes.searchForm__info}>
                            <input className={classes.searchForm__field} type="text" placeholder="Поиск по сайту..." />
                            <button className={classes.searchForm__submit} type="submit"  />
                        </p>
                    </fieldset>
                </form>
            </li>
            <li className={classes.header__item}>
                <NavLink to="/createpost" className={classes.header__link}>Создать пост</NavLink>
            </li>
            <li className={classes.header__item}>
                <NavLink to="/toprate" className={classes.header__link}>Топ рейтинга</NavLink>
            </li>
            <li className={classes.header__item}>
                <NavLink to="/login" className={classes.header__link}>Войти</NavLink>
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

