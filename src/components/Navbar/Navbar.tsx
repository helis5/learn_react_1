import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const getClassName = (navData: { isActive: boolean }) => navData.isActive ? s.active : s.item;

interface NavbarProps {
    state: {
        friends: { id: string, name: string }[],
    }
}

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.navLink}>
                <NavLink to="/" className={getClassName}>Profile</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/dialogs" className={getClassName}>Messages</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/news" className={getClassName}>News</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/music" className={getClassName}>Music</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/settings" className={getClassName}>Settings</NavLink>
            </div>

            <Friends state={props.state}/>

        </nav>)
}
export default Navbar;