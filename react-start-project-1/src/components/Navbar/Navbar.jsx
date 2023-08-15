import style from './Navbar.module.scss'

export function Navbar () {
    return (
        <div className={style.navbarContainer}>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>START</li>
                <li>DIT CO2</li>
                <li>CLEAN UP</li>
                <li>TILMELD DIG</li>
            </ul>
        </div>
    )
}