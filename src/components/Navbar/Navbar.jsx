import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
import User from "./User/User";
import ListSechContainer from "./ListSech/ListSechContainer";
import AddSech from "./AddSechButton/AddSechButton";


const Navbar = () => {
    return (
        <nav className={s.Navbar}>
            <Logo />
            <ListSechContainer/>
            <AddSech />
            <User />
        </nav>
    )
}


export default Navbar;