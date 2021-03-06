import React, {useState} from 'react'
import classes from './Header.module.css'
import '../normalize.css'
import {Logo} from './HeaderComponents/Logo/Logo'
import {CloseBurger} from './HeaderComponents/CloseBurger/CloseBurger'
import {Navigation} from './HeaderComponents/Navigation/Navigation'

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <Logo/>
                <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
                <CloseBurger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
            </div>
        </header>
    )
}

export {Header}