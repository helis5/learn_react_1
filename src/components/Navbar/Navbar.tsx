import React from 'react';
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const getClassName = (navData: { isActive: boolean }) => navData.isActive ? s.active : s.item;

const Navbar: React.FC = () => {
    return (<nav className={s.nav}>
        <div>
            {/*<NavLink to="/" className = {getClassName} >Profile</NavLink>*/}
            <NavLink to="/" className={getClassName}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={getClassName}>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news" className={getClassName}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" className={getClassName}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className={getClassName}>Settings</NavLink>
        </div>

    </nav>)
}
export default Navbar;