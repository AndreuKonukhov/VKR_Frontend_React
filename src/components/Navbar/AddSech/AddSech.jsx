import { NavLink } from "react-router-dom";
import s from './AddSech.module.css'
import plus from './plus_icon.png'

const AddSech = () => {
    return (
        <div>
            <button class={s.addSechButton} type="button">
                    <img src={plus} className={s.plus_icon} />
                <div>
                    Добавить сечение
                </div>
            </button>
        </div>
    )
}

export default AddSech;