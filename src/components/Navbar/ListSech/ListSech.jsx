import s from './ListSech.module.css';
import Sech from "./Sech/Sech";
import axios from "axios";

const ListSech = (props) => {

    //console.log(props.seches)

    let sechElements = props.seches?.map(p => <Sech nameSech={p.sech_name} countNN={p.count_topology} />);

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