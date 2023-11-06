import { NavLink } from "react-router-dom";
import s from './User.module.css'
import user_icon from './user-icon.png'

const User = () => {
    return (
        <div className={s.user}>
             <div> 
                <img className={s.user_icon} src = {user_icon}/>
            </div>
            <div>
                <div className={s.name}>Конухов А. В.</div>
                <div className={s.role}>aдминистратор</div>
            </div>

        </div>
    )
}

export default User;