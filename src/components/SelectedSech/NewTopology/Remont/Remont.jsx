import React from 'react';
import s from './Remont.module.css'
import { ToolOutlined } from '@ant-design/icons';

const Remont = (props) => {
    return (
        <div className={s.content}>
            <ToolOutlined className={s.icon}/>
            <div className={s.text}>
                {props.name_vetv}
            </div>
        </div>
    )
}

export default Remont;