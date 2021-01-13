const HeaderNavigation = (props) => {
    return (
        <nav className={"header__nav " + (props.isNavOpen ? "header__nav_active" : "")}>
        <ul className="header__list">
            <li className="header__item">
                <form className="search-form">
                    <fieldset className="search-form__wrap">
                        <p className="search-form__info">
                            <input className="search-form__field" type="text" placeholder="Поиск по сайту..."></input>
                            <button type="submit" className="search-form__submit"></button>
                        </p>
                    </fieldset>
                </form>
            </li>
            <li className="header__item">
                <a href="#" className="header__link">Топ рейтинга</a>
            </li>
            <li className="header__item">
                <a href="/src/Login/Login.js" className="header__link">Войти</a>
            </li>
        </ul>
        <div className="header__nav-close" onClick={() => { props.setIsNavOpen(!props.isNavOpen) }}>
            <span className="header__nav-close-line"></span>
            <span className="header__nav-close-line"></span>
        </div>
    </nav>
    )
  }
  
  export { HeaderNavigation }

