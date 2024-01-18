import React from 'react';
import './Auth.css'
import { Tooltip } from 'antd';
import Logo from '../Navbar/Logo/Logo';
import s from '../Navbar/Logo/Logo.module.css'
import logo from '../Navbar/Logo/so.png'

// https://i.pinimg.com/originals/51/31/a3/5131a38363ea1bfa0b595a6f1414c07d.gif
// https://gifdb.com/images/high/sao-anime-kirito-showing-amazing-swordsmanship-aojxhk73xqx6k1yy.gif
// https://sopranoclub.ru/images/105-kartinok-s-anime-tyankami-18/file47483.jpg


// https://mymodernmet.com/wp/wp-content/uploads/2017/12/HappyToast-Pylons2016.gif

// https://i.gifer.com/embedded/download/Lpk1.gif
const Auth = (props) => {
    return (

        <div class="login">
            <h1>
                <img src='https://i.gifer.com/embedded/download/PwSB.gif' name='i' class='i' />
            </h1>
            <div name='logo'>
                <div className={s.logo}>
                    <img className={s.img}
                        src={logo}
                        alt="Значок СО" />
                    <span className={s.mdp}> МДП</span>
                    <span className={s.INS}> ИНС</span>
                </div>
            </div>

            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large">Войти</button>
            </form>
        </div>

    )
}

export default Auth;