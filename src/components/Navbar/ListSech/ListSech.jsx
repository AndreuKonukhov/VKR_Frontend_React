import s from './ListSech.module.css';
import React from "react";
import Sech from "./Sech/Sech";
const ListSech = (props) => {
    
    let sechElements = props.seches?.map(p => <Sech id={p.id} nameSech={p.sech_name} countNN={p.count_topology} />);

    let func = () => {
        if (sechElements.length !== 0){
            return (sechElements)
        }
        else{
            return(<div>Не удалось загрузить перечень сечение</div>)
        }
    }

    return (
        <div className={s.seches}>
            <div className={s.contrSech}>
                Контролируемые сечения
            </div>
            <input className={s.search} type="text" placeholder=" Search" />
            
            {func()}
        </div>
    )
}

export default ListSech;