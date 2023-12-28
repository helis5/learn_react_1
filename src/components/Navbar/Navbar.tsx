import React from 'react';
import s from './Navbar.module.scss'

const Navbar = () => {
    return (<nav className={s.nav}>
        <a href="/">Profile</a>
        <a href="/">Messages</a>
        <a href="/">News</a>
        <a href="/">Music</a>
        <a href="/">Settings</a>
    </nav>)
}
export default Navbar;