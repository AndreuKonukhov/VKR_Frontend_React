import React, { useState } from "react";
import s from './UploadNewTopology.module.css'
import axios from "axios";
import { Tooltip, Button, message, Upload, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import img_question from './img.png'

import { InboxOutlined } from '@ant-design/icons';

const UploadNewTopology = (props) => {

    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const { Dragger } = Upload;

    function renameFile(originalFile, newName) {
        return new File([originalFile], newName, {
            type: originalFile.type,
            lastModified: originalFile.lastModified,
        });
    }
    
    const prop = {
        name: 'file',
        multiple: false,
        onChange(info) {
            // console.log(info)
            const { status } = info.file;
            if (status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                // message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },

        onDrop(e) {
            let file = renameFile(e.dataTransfer.files[0], `${props.sech_num}`)
            props.checkFileTopology(file)
        },

        beforeUpload: (file) => {
            const isPNG = file.type === '';
            if (!isPNG) {
                message.error(`${file.name} файл не поддерживается`);
                return isPNG || Upload.LIST_IGNORE;
            }
            setFileList([...fileList, file]);
            return false;
        },
    };

    return (
        <div className={s.upload_factors}>
            <ConfigProvider
                theme={{
                    token: {
                        colorTextDescription: "#5b8f41",
                        fontFamily: "RobotoFlex",
                        controlHeightLG: 1,
                    },
                }}
            >
                <div className={s.text}>
                    Файл RastrWin3 c необходимой топологией
                    <Tooltip title="Инфо">
                        <img src={img_question} className={s.img_question} />
                    </Tooltip>
                </div>
                <div className={s.dragger}>
                    <Dragger {...prop}
                        maxCount={1}
                        style={{ size: 'small' }}>
                        <InboxOutlined className={s.icon}/>
                        <p className={s.ant_upload_up}>Кликните для выбора или перетащите в эту область файл</p>
                        <p className={s.ant_upload_down}>Поддерживаются файлы с шаблонами rg2, rst, os или "без шаблона" RastrWin3</p>
                    </Dragger>
                </div>


            </ConfigProvider>
        </div>

    )
}

export default UploadNewTopology;