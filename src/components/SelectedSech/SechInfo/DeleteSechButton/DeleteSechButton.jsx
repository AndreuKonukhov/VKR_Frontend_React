import React from 'react';
import s from './DeleteSechButton.module.css'
import { Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom"

const DeleteSechButton = (props) => {
    const navigate = useNavigate();

    const confirm = (e) => {
        console.log(props.sech_id)
        props.deleteSech(props.sech_id)
        navigate(`/`)
    };

    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    let discription = `Вы уверены что хотите удалить сечение\n\n
    ${props.sech_name}?`

    return (
        <div className={s.button}>
            <Popconfirm
                placement="leftTop"
                title="Удалить сечение"
                description={discription}
                onConfirm={confirm}
                onCancel={cancel}
                okText="Да"
                cancelText="Нет"
            >
                <Button icon={<DeleteOutlined />}
                    className={s.button_delete}
                    type="primary">
                    Удалить сечение
                </Button>
            </Popconfirm>

        </div>
    )
}

export default DeleteSechButton;