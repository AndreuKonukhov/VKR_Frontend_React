import React from "react";
import s from './Profile.module.css'

const Profile = (props) => {
    
    let listSech = props.sechen.map((se) => {
        return <div>{se.name}</div>;
    })

    let newSech = React.createRef();

    let addSechen = () => {
        props.addSech()
    }

    let onPostChange = () => {
        let text = newSech.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.Profile}>
            <div>
                <img className={s.img} src='https://papik.pro/uploads/posts/2022-01/1641286362_36-papik-pro-p-vektornii-risunok-lep-39.jpg' />
            </div>
            <div>
                <textarea onChange={onPostChange} 
                          className={s.textarea}
                          value={props.newPostText}
                          ref={newSech}></textarea>
            </div>
            <div>
                <button onClick={addSechen}>Добавить сечение</button>
            </div>
            {listSech}
            <div className={s.item}>
                Post 2
            </div>
        </div>
    )
}

export default Profile;