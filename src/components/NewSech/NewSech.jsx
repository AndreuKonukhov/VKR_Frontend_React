import React from "react";
import s from './NewSech.module.css'
import header_img from './Header.jpg'
import { NavLink } from "react-router-dom";
import ContentNewSech from "./ContentNewSech/ContentNewSech";

const NewSech = () => {
    return (
        <nav className={s.newSech}>
            <div className={s.header}>
                <img src={header_img} className={s.header_img}/>
                <div className={s.text}>Добавление нового контролируемого сечения</div>
            </div>
            Выберите КС
            <ContentNewSech/>
            Выбрано КС:
            <textarea>dsd</textarea>
            Путь к директории СМЗУ
            <ContentNewSech/>
            <button>СОХРАНИТЬ 
            </button>
        </nav>
    )
}

const ActiveLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.item
    );
}

export default NewSech;