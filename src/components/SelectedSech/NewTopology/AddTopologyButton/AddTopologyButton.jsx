import React, { useState } from 'react';
import s from './AddTopologyButton.module.css'
import { SaveOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const AddTopologyButton = (props) => {

    const saveTopology = () => {
        props.setNewTopology(false)
    }

    return (
        <Button
            icon={<SaveOutlined />}
            className={s.ant}
            type="primary"
            onClick={saveTopology}
        // disabled={!(fileList.length != 0 && props.selectedNewSech.length != 0)}
        // loading={uploading}>
        //{uploading ? 'Uploading' : 'Сохранить'}
        >
            Обучить модель ИНС
        </Button>
    )
}

export default AddTopologyButton;