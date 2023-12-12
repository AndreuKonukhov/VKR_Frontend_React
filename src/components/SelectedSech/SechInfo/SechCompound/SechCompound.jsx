import React from 'react';
import s from './SechCompound.module.css'

const SechCompound = (props) => {

    let vetvs_by_sech =<div>Список загружается</div>
    if (props.vetvs){
        let vetvs_str = props.vetvs.replace(/'/g,"\"")
        let obj = JSON.parse(vetvs_str)
        vetvs_by_sech = obj?.map(p => <div className={s.vetv} key={p.name_vetv}>{p.name_vetv}</div>);
    }

    return (
        <div className={s.content}>
            <div className={s.sech_text}>Состав сечения в RastrWin3:</div>
            {vetvs_by_sech}
        </div>
    )
}

export default SechCompound;