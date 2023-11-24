import React from "react";
import s from './NewSech.module.css'
import header_img from './Header.jpg'
import SelectSech from "./SelectSech/SelectSech";
import UploadFactors from "./UploadFactors/UploadFactors";
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

class NewSech extends React.Component {

    newSechElement = React.createRef();

    onAddSech = () => {
        this.props.addSech();
    }

    onNameSechChange = () => {
        let text = this.newSechElement.current.value;
        this.props.updateNewNameSech(text);
    }


    render() {
        return (
            <nav className={s.newSech}>
                <div className={s.header}>
                    <img src={header_img} className={s.header_img} />
                    
                    <div className={s.text}>Добавление нового контролируемого сечения</div>
                </div>

                    

                <div className={s.content}>
                    <SelectSech newSechName={this.props.newSechName}
                                updateNewNameSech={this.props.updateNewNameSech}/>
                    <UploadFactors newSechName={this.props.newSechName}/>

                    {/* <Button icon={<PlusOutlined />}
                    className={s.button}
                    style={{background: "#e0e0e0",
                    width: 200,
                    height: 35,}}>
                    Добавить сечение */}
                    {/* </Button> */}
                    {/* <div>
                    Выбрано КС:
                    <textarea onChange={this.onNameSechChange} ref={this.newSechElement}
                        value={this.props.newSechNameText} />
                    Путь к директории СМЗУ
                    <button onClick={this.onAddSech}>СОХРАНИТЬ</button>
                    
                    </div> */}
                </div>
            </nav>
        )
    }
}


export default NewSech;