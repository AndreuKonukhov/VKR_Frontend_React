import React from "react";
import s from './ContentNewSech.module.css'

import { NavLink } from "react-router-dom";

const ContentNewSech = () => {
    return (
            <div>
                <input list="fruits"/>
<datalist id="fruits">
  <option value="Братск - Иркутск"/>
  <option value="Ангара - Запад"/>
  <option value="Выдача мощности НТЭЦ-11"/>
</datalist>

            </div>
    )
}

const ActiveLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.item
    );
}

export default ContentNewSech;