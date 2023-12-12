import React from 'react';
import s from './SechInfo.module.css'
import DeleteSechButton from './DeleteSechButton/DeleteSechButton';
import SechCompound from './SechCompound/SechCompound';
import { EditOutlined } from '@ant-design/icons';
import { NavLink, Outlet } from 'react-router-dom';
import sech_info from './sech_info.png'
const SechInfo = (props) => {
    return (
        <div className={s.content}>
            <img src={sech_info} alt="фон" className={s.img}/>
            <div className={s.name_row}>
                <span className={s.sech_text}>Сечение</span>
                <span className={s.sech_name}>{props.sech.sech_name}</span>
                <NavLink to={'/'} className={s.edit_link}>
                    <EditOutlined className={s.edit} />
                </NavLink>
                <DeleteSechButton deleteSech={props.deleteSech}
                    sech_name={props.sech.sech_name}
                    sech_id={props.sech.sech_id} />
            </div>
            <SechCompound vetvs={props.sech.vetvs}/>
        </div>
    )
}

export default SechInfo;