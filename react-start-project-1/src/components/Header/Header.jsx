import style from './Header.module.scss'

import headerBg from '../../images/Bg-Hero-Blue.png'
import headerLogo from '../../images/KT-Logo.png'

export function Header () {
    return (
        <div className={style.headerContainer}>
            <img src={headerBg} alt="Header background" className={style.headerBg}/>
            <img src={headerLogo} alt="Header logo" className={style.headerLogo}/>
            <div>
                <p>"Det er rigtigt, at vi hver især kun kan bidrage lidt til den samlede løsning."</p>
                <p>"Lige så rigtigt er det, at vi slet ikke kan nå målet, uden at hver især bidrager en smule til det."</p>
            </div>
        </div>
    )
}