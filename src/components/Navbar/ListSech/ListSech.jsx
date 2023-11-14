import { NavLink } from "react-router-dom";
import s from './ListSech.module.css'
import Sech from "./Sech/Sech";

const ListSech = (props) => {

    let sechElements = props.seches?.map(p => <Sech nameSech={p.nameSech} countNN={p.countNN} />);
    
    return (
        <div className={s.seches}>
            <div className={s.contrSech}>
                Контролируемые сечения
            </div>
            <input class={s.search} type="text" placeholder=" Search" />
            {sechElements}
        </div>
    )
}

export default ListSech;