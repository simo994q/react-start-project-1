import style from './Footer.module.scss'

import footerBgColor from '../../images/Bg-Tile-Blue-Light.png'
import footerLogo from '../../images/KT-Logo.png'

export function Footer() {
    function checkValid(event) {
        event.preventDefault()
        let errorMessage = 'Du mangler at udfylde:\n'

        if (event.target.personName.value.length == 0) {
            errorMessage = errorMessage + '\nNavn'
        }

        if (event.target.personCity.value.length == 0) {
            errorMessage = errorMessage + '\nBy'
        }

        if (event.target.personEmail.value.length == 0) {
            errorMessage = errorMessage + '\nEmail'
        }

        if (event.target.personPhone.value.length == 0) {
            errorMessage = errorMessage + '\nTelefon'
        }

        if (event.target.personName.value.length == 0 || event.target.personCity.value.length == 0 || event.target.personEmail.value.length == 0 || event.target.personPhone.value.length == 0) {
            alert(errorMessage)
        }

    };
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
                <form onSubmit={(event) => checkValid(event)}>
                    <h3>Ja tak! Jeg vil gerne høre mere</h3>
                    <input type="text" placeholder='Fulde navn' id='personName' name='personName'/>
                    <input type="text" placeholder='Hjemby' id='personCity' name='personCity'/>
                    <input type="email" placeholder='Email' id='personEmail' name='personEmail'/>
                    <input type="number" placeholder='Telefon' id='personPhone' name='personPhone'/>
                    <div>
                        <p>Få en samtale med Klimatossen</p>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p>Modtag nyhedsbrev</p>
                        <input type="checkbox" />
                    </div>
                    <input type='submit' id='formButton' value='send'></input>
                </form>
            </section>
        </div>
    )
}