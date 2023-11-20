import s from './ListSech.module.css'
import Sech from "./Sech/Sech";
import axios from "axios";

const ListSech = (props) => {
    debugger
    if (props.seches.length === 0) {
        axios.get("http://127.0.0.1:8000/seches/")
            .then(response => {
                props.setSeches(response.data);
            });
    }
    console.log(props.seches)


    let sechElements = props.seches?.map(p => <Sech nameSech={p.sech_name_view} countNN={p.countNN} />);

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