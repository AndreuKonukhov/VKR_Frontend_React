import { NavLink } from "react-router-dom";
import s from './AddSech.module.css'
import plus from './plus_icon.png'

const AddSech = () => {
    return (
        <NavLink to='/newSech' style={{ textDecoration: 'none' }}
            className={ActiveLink()}>
            <div>
                <button class={s.addSechButton} type="button">
                    <img src={plus} className={s.plus_icon} />
                    <div>
                        Добавить сечение
                    </div>
                </button>
            </div>
        </NavLink>
    )
}

const ActiveLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.item
    );
}

export default AddSech;