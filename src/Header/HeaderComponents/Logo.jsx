import logo from '../img/logo.svg'

const Logo = () => {
    return (
        <a href="#" className="header__home"><img src={logo} alt="logo" className="header__logo"></img></a>
    )
}

export { Logo }