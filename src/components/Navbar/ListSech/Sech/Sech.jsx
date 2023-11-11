import { NavLink } from "react-router-dom";
import s from './Sech.module.css'
import countNN_img from './countNN_icon.png'


const Sech = (props) => {
    return (
        <NavLink to="/sech_1" activeClassName={s.activeSech} className={s.nav}>
            <div className={s.sech}>
                <div className={s.sechName}>
                    {props.nameSech}
                </div>
                <div className={s.countNN}>
                    {props.countNN}
                </div>
                <img src={countNN_img} className={s.img} />
            </div>
        </NavLink>
    )
}

export default Sech;