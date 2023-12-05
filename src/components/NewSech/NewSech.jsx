import React from "react";
import s from './NewSech.module.css'
import header_img from './Header.jpg'
import UploadFactors from "./UploadFactors/UploadFactors";


const NewSech = (props) => {

    return (
        <nav className={s.newSech}>
            <div className={s.header}>
                <img src={header_img} className={s.header_img} />
                <div className={s.text}>Добавление нового контролируемого сечения</div>
            </div>


            <div className={s.content}>
                <UploadFactors
                    getListSeches={props.getListSeches}
                    selectedNewSech={props.selectedNewSech}
                    sechesView={props.sechesView}
                    updateNewNameSech={props.updateNewNameSech}
                />
            </div>
        </nav>
    )
}


export default NewSech;