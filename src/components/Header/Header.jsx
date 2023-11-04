import React from "react"
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className= {s.header} >
            <img className={s.img} src='https://storage.myseldon.com/news-pict-be/BEB8BDAE765FE556D3A646CD6FA05965' />
        </header>
    )
}

export default Header;