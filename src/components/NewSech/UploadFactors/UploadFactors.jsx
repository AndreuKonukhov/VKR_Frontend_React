import React, { useState } from "react";
import s from './UploadFactors.module.css'
import axios from "axios";
import { Button, Select, message, Upload, ConfigProvider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import MyTooltip from "../../Elements/MyTooltip/MyTooltip";


const UploadFactors = (props) => {

    //Для смены адреса страницы без применения Navlink
    const navigate = useNavigate();

    let sechElements = props.sechesView.map(p => {
        return {
            label: p.server_name,
            options: p.seches.map(sech => {
                return {
                    label: `(${sech.num_sech})  ${sech.name_sech}`,
                    value: `${sech.num_sech}~${sech.name_sech}`
                }
            })
        }
    })

    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);


    const saveNewSech = () => {
        axios.post("http://127.0.0.1:8000/seches/",
            {
                id: props.selectedNewSech[0],
                sech_name: props.selectedNewSech[1]
            }).then(() => {
                sendFile()
            })
            .catch((ex) => {
                if (ex.response.status == 400) {
                    message.error(`Сечение ${props.selectedNewSech[1]} 
                    уже существует`);
                }
                else {
                    message.error('Ошибка создания сечения');
                }
            })

    }
    const sendFile = () => {
        let file = renameFile(fileList[0], `factors${props.selectedNewSech[0]}`)
        //Создаем форму для отправки http
        const formData = new FormData();
        // Добавляем в форму первый файл
        formData.append('file', file);
        // Делаем кнопку серой
        setUploading(true);

        // Использую axios, но можно и другое
        axios.post('http://127.0.0.1:8000/factors/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((resp) => resp.message)
            .then(() => {
                setFileList([]);

                props.getListSeches()
                navigate(`/`)
                message.success(`Сечение ${props.selectedNewSech[1]} успешно добавлено`);;
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

    function renameFile(originalFile, newName) {
        return new File([originalFile], newName, {
            type: originalFile.type,
            lastModified: originalFile.lastModified,
        });
    }

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    const onChange = (value) => {
        let value_list = value.split('~', 2)
        value_list[0] = Number(value_list[0])
        props.updateNewNameSech(value_list)
        console.log("вот значение", props.selectedNewSech)
    };

    return (
        <div className={s.upload_factors}>
            <div className={s.selected}>
                <MyTooltip text='Контролируемое сечение'
                    question='Инфо' />
                <Select
                    className={s.select}
                    placeholder="Выберите контролируемое сечение"
                    value={props.newSechName}
                    optionFilterProp="children"
                    filterOption={filterOption}
                    style={{
                        width: 500,
                        height: 35,
                    }}
                    onChange={onChange}
                    options={sechElements}
                />
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        colorTextDescription: "#5b8f41;b",
                        fontFamily: "RobotoFlex",
                    },
                }}
            >
                <div className={s.uploader}>
                    <MyTooltip text='Файл влияющих факторов'
                        question="Ожидается загрузка файла .csv с влияющими факторами.
                    О необходимой структуре файла см. в руководстве ПО" />
                    <Upload {...handler} className={s.upl} maxCount={1}>
                        <Button icon={<UploadOutlined />}
                            className={s.button_upload}>Выберите файл
                        </Button>
                    </Upload>
                </div>
                <div className={s.buttonSave}>
                    <Button
                        className={s.ant}
                        type="primary"
                        onClick={saveNewSech}
                        disabled={!(fileList.length != 0 && props.selectedNewSech.length != 0)}
                        loading={uploading}>

                        {uploading ? 'Uploading' : 'Сохранить'}
                    </Button>
                </div>
            </ConfigProvider>
        </div>

    )
}

export default UploadFactors;