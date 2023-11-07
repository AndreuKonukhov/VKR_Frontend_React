import { NavLink } from "react-router-dom";
import s from './ListSech.module.css'

const ListSech = () => {
    return (
        <div className={s.seches}>
            <div className={s.contrSech}>
                Контролируемые сечения
            </div>
            <div className={s.container}>
                <input type="text" className={s.input} placeholder="Search"/>
                <div className={s.close_btn}>
                    &times;
                </div>
            </div>
        </div>
    )
}

export default ListSech;