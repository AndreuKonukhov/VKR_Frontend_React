import { NavLink } from "react-router-dom";
import s from './ListSech.module.css'

  
const ListSech = () => {
    return (
        <div className={s.seches}>
            <div className={s.contrSech}>
                Контролируемые сечения
            </div>

                <input class={s.search} type="text" placeholder=" Search"/>

        </div>
    )
}

export default ListSech;