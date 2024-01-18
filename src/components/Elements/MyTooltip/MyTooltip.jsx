import React from 'react';
import s from './MyTooltip.module.css'
import { Tooltip } from 'antd';
import img_question from './img.png'

const MyTooltip = (props) => {
    return (
        <div className={s.text}>
            {props.text}
            <Tooltip title={props.question}>
                <img src={img_question} className={s.img_question} />
            </Tooltip>
        </div>
    )
}

export default MyTooltip;