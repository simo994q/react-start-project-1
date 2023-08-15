import style from './Footer.module.scss'

import footerBgColor from '../../images/Bg-Tile-Blue-Light.png'
import footerLogo from '../../images/KT-Logo.png'

export function Footer() {
    return (
        <div className={style.footerContainer} style={{ backgroundImage: `url(${footerBgColor})` }}>
            <section className={style.footerAbout}>
                <h3>KlimaTossen NPO</h3>
                <div>
                    <p>Vesterbrogade 92</p>
                    <p>9000 Aalborg</p>
                    <p>info@klima-tossen.dk</p>
                    <p>9922 3344 (Åben man - fre: 08.00 - 16.00)</p>
                </div>
                <h3>SAMARBEJDSPARTNERE:</h3>
                <div>
                    <a href="">https://www.dn.dk/</a>
                    <a href="">http://www.miljoeportal.dk</a>
                </div>
                <img src={footerLogo} alt="" />
            </section>

            <section className={style.footerForm}>
                <h3>Ja tak! Jeg vil gerne høre mere</h3>
                <input type="text" placeholder='Fulde navn' />
                <input type="text" placeholder='Hjemby' />
                <input type="email" placeholder='Email' />
                <input type="number" placeholder='Telefon' />
                <div>
                    <p>Få en samtale med Klimatossen</p>
                    <input type="checkbox" />
                </div>
                <div>
                    <p>Modtag nyhedsbrev</p>
                    <input type="checkbox" />
                </div>
                <button>Send</button>
            </section>
        </div>
    )
}