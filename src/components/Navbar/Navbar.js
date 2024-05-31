import React from 'react'
import logo from '../../../assets/amazon_logo.png'

function goToSearch() {
    window.location.pathname = '/search'
}

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <a href='/'><img src={logo} alt="Amazon Logo" /></a>
            </div>

            <div className='search'>
                <input type='text' />
                <button onClick={goToSearch}>Search</button>
            </div>

            <div className='nav'>
                <div className='nav__option'>
                    <span className='min' >Hello, Sign in</span>
                    <span>Account & Lists</span>
                </div>
                <div className='nav__option'>
                    <span>Returns</span>
                    <span>& Orders</span>
                </div>
                <div className='nav__option'>
                    <span>Your</span>
                    <span>Prime</span>
                </div>
                <div className='nav__option'>
                    <span>Cart</span>
                </div>
            </div>


        </nav >
    );
}

export default Navbar;