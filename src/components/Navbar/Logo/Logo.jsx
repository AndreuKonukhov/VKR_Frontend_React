import { NavLink } from "react-router-dom";
import s from './Logo.module.css'

const Logo = () => {
    return (
        <nav className={s.Logo}>
            <div className={s.MDP}>МДП</div>
        </nav>
    )
}

export default Logo;