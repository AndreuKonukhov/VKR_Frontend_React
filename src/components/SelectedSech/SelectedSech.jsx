import React from 'react';
import s from './SelectedSech.module.css'
import SechInfo from './SechInfo/SechInfo';
import img from '../StartedPage/img.jpg'

const SelectedPage = (props) => {
    return (
        <div className={s.content}>
            <SechInfo deleteSech={props.deleteSech} sech={props.sech}/>
            <img className={s.img} src={img} />
        </div>
    )
}

export default SelectedPage;