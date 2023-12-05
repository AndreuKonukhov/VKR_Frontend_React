import s from './StartedPage.module.css'
import img from "./img.jpg"

const StartedPage = () => {
    return (
        <div className={s.content}>
            <div className={s.text}>Выберите контролируемое сечение</div>
            <img className={s.img} src={img}/>
        </div>
    )
}

export default StartedPage;