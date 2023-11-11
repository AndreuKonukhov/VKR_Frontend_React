import React from "react";
import s from './NewSech.module.css'
import header_img from './Header.jpg'
import ContentNewSech from "./ContentNewSech/ContentNewSech";
import {addSechActionCreator, updateNewSechTextActionCreator} from "../../redux/navbar-reducer";

const NewSech = (props) => {
    console.log(props)
    
    let newSechElement = React.createRef();

    let addSech = () => {
        props.dispatch(addSechActionCreator());
    }

    let onNameSechChange = () => {
        let text = newSechElement.current.value;
        let action = updateNewSechTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <nav className={s.newSech}>
            <div className={s.header}>
                <img src={header_img} className={s.header_img} />
                <div className={s.text}>Добавление нового контролируемого сечения</div>
            </div>
            Выберите КС
            <ContentNewSech />
            Выбрано КС:
            <textarea onChange={onNameSechChange} ref={newSechElement}
                value={props.newSechText}/>
            Путь к директории СМЗУ
            {/* <ContentNewSech /> */}
            <button onClick={addSech}>СОХРАНИТЬ
            </button>
        </nav>
    )
}

const ActiveLink = () => {
    return (
        select => select.isActive ? s.activeLink : s.item
    );
}

export default NewSech;