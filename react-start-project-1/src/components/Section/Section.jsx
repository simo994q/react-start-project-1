import style from './Section.module.scss'

export function Section(props) {
    return (
        <div className={style.sectionContainer} style={{ backgroundImage: `url(${props.sectionInformation.bgColor})` }}>
            <header>
                <h2>{props.sectionInformation.header}</h2>
            </header>
            <figure>
                <img src={props.sectionInformation.image} alt="" />
                <section>
                    <h3>{props.sectionInformation.secondHeader}</h3>
                    <ul>
                        {props.sectionInformation.information.map(text => {
                            return (
                                <li>{text}</li>
                            )
                        })}
                    </ul>
                    <p>

                        <a href="">Læs mere</a>
                    </p>
                </section>
            </figure>
            {props.sectionInformation.spacer &&
                <img src={props.sectionInformation.spacer} alt="" />
            }
        </div>
    )
}



