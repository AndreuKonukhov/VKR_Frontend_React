import React from 'react';
import s from './SechCompound.module.css'
import { NavLink } from 'react-router-dom';

const SechCompound = (props) => {
    debugger
    let vetvs_str = props.vetvs.replace(/'/g,"\"")
    let obj = JSON.parse(vetvs_str)

    let vetvs_by_sech = obj?.map(p => <div className={s.vetv}>{p.name_vetv}</div>);

    console.log(obj)
    return (
        <div className={s.content}>
            <div className={s.sech_text}>Состав сечения в RastrWin3:</div>
            {vetvs_by_sech}
        </div>
    )
}

export default SechCompound;