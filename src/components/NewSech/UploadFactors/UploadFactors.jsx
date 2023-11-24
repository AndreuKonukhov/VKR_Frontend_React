import React, { useState } from "react";
import s from './UploadFactors.module.css'
import axios from "axios";
import { Input, Tooltip, Button, message, Upload, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import img from './img.png'


const UploadFactors = (props) => {

    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const handleUpload = () => {
        //Создаем форму для отправки http
        const formData = new FormData();
        // Добавляем в форму первый файл
        formData.append('file', fileList[0]);
        // Делаем кнопку серой
        setUploading(true);
        console.log(props.newSechName)
        // Использую axios, но можно и другое
        axios.post('http://127.0.0.1:8000/factors/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((resp) => resp.message)
            .then(() => {

                setFileList([]);
                message.success('upload successfully.');
            })
            .catch(() => {
                message.error('upload failed.');
            })
            .finally(() => {
                setUploading(false);
            });
    };
    const handler = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            console.log(file.type)
            const isPNG = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            if (!isPNG) {
                message.error(`${file.name} не является CSV файлом`);
                return isPNG || Upload.LIST_IGNORE;
            }
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    // controlItemBgHover: "#e0e0e0",
                    colorText: "#e0e0e0"/* here is your global tokens */
                },
            }}
        >


            <div className={s.upload_factors}>
                <div className={s.text}>
                    Файл влияющих факторов
                    <Tooltip title="Ожидается загрузка файла .csv с влияющими факторами.
                    О необходимой структуре файла см. в руководстве ПО">
                        <img src={img} className={s.img} />
                    </Tooltip>
                </div>
                <Upload {...handler} className={s.upl}>
                    <Button icon={<UploadOutlined />}
                        borderColorDisabled="#e0e0e0"
                        style={{
                            background: "#e0e0e0",
                            width: 500,
                            height: 35,
                        }}>Выберите файл</Button>

                </Upload>
                <div className={s.buttonSave}>
                    <Button
                        className={s.ant}
                        type="primary"
                        onClick={handleUpload}
                        disabled={!(fileList.length != 0 && props.newSechName != null)}
                        loading={uploading}
                        style={{
                            margin: "top"
                        }}>
                        {uploading ? 'Uploading' : 'Сохранить'}
                    </Button>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default UploadFactors;