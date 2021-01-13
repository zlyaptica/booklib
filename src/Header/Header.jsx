import React, { useState } from 'react'
import './Header.css'
import '../normalize.css'
import { Logo } from './HeaderComponents/Logo'
import { CloseBurger } from './HeaderComponents/CloseBurger'
import { Navigation } from './HeaderComponents/Navigation'

const Header = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <Logo />
                    <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
                    <CloseBurger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
                </div>
            </div>
        </header> 
    )
}

export { Header }