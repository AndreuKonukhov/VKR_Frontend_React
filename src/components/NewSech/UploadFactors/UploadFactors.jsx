import React, { useState } from "react";
import s from './UploadFactors.module.css'
import axios from "axios";
import { Input, Tooltip, Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import img from './img.png'


const UploadFactors = () => {

    const [drag, setDrag] = useState(false)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files[0])
        const formData = new FormData()
        formData.append('file', files[0])
        axios.post('http://127.0.0.1:8000/factors/',)

        setDrag(false)
    }

    return (
        <div className={s.upload_factors}>
            <div className={s.text}>
                Влияющие факторы
                <Tooltip title="prompt text">
                    <img src={img} className={s.img} />
                </Tooltip>
            </div>
            <div className={s.iwantfile}>
                {drag
                    ? <div onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop = {e => onDropHandler(e)}
                        className={s.drop}>Отпуcтите файлы</div>
                    : <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        className={s.drag}>Перетащите файлы в область</div>
                }
            </div>
            <input />
            {/* <img src={lines_img} className={s.lines_img} /> */}




            {/* <Upload {...prop} 
            action={"http://localhost:8000/sches/"}
            >
                <Button icon={<UploadOutlined />}
                    style={{background: "#e0e0e0",
                    width: 500,
                    height: 35,}}>
                    Загрузите файл с факторами
                </Button>
            </Upload> */}
        </div>
    )
}

export default UploadFactors;