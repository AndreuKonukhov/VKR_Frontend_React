import React from 'react';
import s from './NewTopology.module.css'
import { LeftCircleOutlined } from '@ant-design/icons';
import UploadNewTopology from './UploadNewTopology/UploadNewTopology';

const NewTopology = (props) => {

    const setTopologyPage = () => {
        props.setNewTopology(false)
    }

    return (
        <div className={s.content}>
            <div className={s.header}>
                <LeftCircleOutlined onClick={setTopologyPage} className={s.back} />

                <div className={s.newTopText}>Создание новой топологии</div>
            </div>
            <div className={s.area}>
                <UploadNewTopology checkFileTopology={props.checkFileTopology}
                    sech_num={props.sech_num} />
            </div>
        </div>

    )
}

export default NewTopology;