import { NavLink } from "react-router-dom";
import s from './Logo.module.css'
import logo from './so.png'

const Logo = () => {
    return (
        <> 
            <NavLink to='/' className={s.link}>
                <div className={s.logo}>
                    <img className={s.img}
                        src={logo}
                        alt="Значок СО" />
                    <span className={s.mdp}> МДП</span>
                    <span className={s.INS}> ИНС</span>
                </div>
                <hr className={s.upperLine} />
            </NavLink>
        </>
    )
}

export default Logo;