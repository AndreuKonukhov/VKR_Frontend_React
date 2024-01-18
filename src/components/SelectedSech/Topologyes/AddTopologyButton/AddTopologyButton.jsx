import React from 'react';
import s from './AddTopologyButton.module.css'
import { Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"

const AddTopologyButton = (props) => {

    const setTop=() =>{
        props.deleteCheckTopology()
        props.setNewTopology(true)
    }

    return (
        <div className={s.button}>
            <Button icon={<PlusOutlined />}
                className={s.button_delete}
                onClick={setTop}
                type="primary">
                Добавить
            </Button>
        </div>
    )
}

export default AddTopologyButton;