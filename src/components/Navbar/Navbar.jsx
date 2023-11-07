import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
import User from "./User/User";
import ListSech from "./ListSech/ListSech";
import AddSech from "./AddSech/AddSech";


const Navbar = () => {
    return (
        <nav className={s.Navbar}>
            <Logo/>  
            <ListSech/>
            <AddSech/>
            <User/>

            {/* <div className={s.item}>
                <NavLink to='/profile'
                    className={ActiveLink()}
                >Сечения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialog'
                className={ActiveLink()}
                >Dialog</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div> */}
        </nav>
    )
}

const ActiveLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.item
    );
}

export default Navbar;