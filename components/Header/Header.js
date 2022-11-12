import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='header_nav'>
                    <h1 className='header_title'>
                        <img src={Logo} alt=''/>  
                    </h1>
                    <ul className='header_menu'>
                        <li className='header_item'>Home</li>
                        <li className='header_item'>Portfolio</li>
                        <li className='header_item'>Contact Us</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header