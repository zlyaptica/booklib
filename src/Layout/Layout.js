import React, { useState } from 'react'
import './Layout.css'
import '../normalize.css'
import { BookLib } from './LayoutComponents/BookLib'
import { CloseBurger } from './LayoutComponents/CloseBurger'
import { HeaderNavigation } from './LayoutComponents/HeaderNavigation'

const Layout = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__wrapper">
                    <BookLib />
                    <HeaderNavigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
                    <CloseBurger isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
                </div>
            </div>
        </header> 
    )
}

export { Layout }