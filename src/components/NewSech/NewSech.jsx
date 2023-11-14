import React from "react";
import s from './NewSech.module.css'
import header_img from './Header.jpg'
import ContentNewSech from "./ContentNewSech/ContentNewSech";

const NewSech = (props) => {

    let newSechElement = React.createRef();

    let onAddSech = () => {
        props.addSech();
    }

    let onNameSechChange = () => {
        let text = newSechElement.current.value;
        props.updateNewNameSech(text);
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
                value={props.newSechNameText}/>
            Путь к директории СМЗУ
            {/* <ContentNewSech /> */}
            <button onClick={onAddSech}>СОХРАНИТЬ
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