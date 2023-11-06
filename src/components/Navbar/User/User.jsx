import { NavLink } from "react-router-dom";
import s from './User.module.css'
import user_icon from './user-icon.png'
import exit_icon from './exit-icon.png'

const User = () => {
    return (
        <div>
            <div><hr className={s.downLine} /></div>
            <div className={s.footer}>
            
                <div></div>

                <div className={s.user}>
                    <img className={s.user_icon} src={user_icon} />
                    <div >
                        <div className={s.name}>Конухов А. В.</div>
                        <div className={s.role}>администратор</div>
                    </div>
                </div>

                <div className={s.exit_icon1}>
                    <img className={s.exit_icon} src={exit_icon} />
                </div>

            </div>
        </div >
    )
}

export default User;