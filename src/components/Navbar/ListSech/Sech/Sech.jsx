import { NavLink } from "react-router-dom";
import s from './Sech.module.css'
import countNN_img from './countNN_icon.png'


const Sech = (props) => {
    let link = `/sech${props.nameSech}`
    return (
        <NavLink to={link} activeClassName={s.activeSech} className={ActiveLink()}>
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

const ActiveLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.nav
    );
}
export default Sech;