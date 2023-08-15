import './App.css'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Quote } from './components/Quote/Quote'
import { Section } from './components/Section/Section'

import co2Img from './images/Icon-CO2.png'
import co2Bg from './images/Bg-Tile-Maroon.png'
import co2Spacer from './images/Spacer-01.png'

import climateImg from './images/Icon-Climate.png'
import climateBg from './images/Bg-Tile-Blue-Dark.png'
import climateSpacer from './images/Spacer-02.png'

import checklistImg from './images/Icon-Checklist.png'
import checklistBg from './images/Bg-Tile-Green.png'
import checklistSpacer from './images/Spacer-03.png'

import arrangementImg from './images/Icon-Arrangement.png'
import arrangementBg from './images/Bg-Tile-Rosy.png'


const co2Section = {
  header: 'HVAD ER CO2?',
  image: co2Img,
  secondHeader: 'CO2 er en gasart der findes naturligt i Jordens atmosfære.',
  information: [
    'CO2, findes naturligt i atmosfæren.',
    'Livet, er afhængigt af CO2 da det regulerer temperaturen på Jorden.',
    'CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og udånder CO2.Planter optager CO2, og omdanner det til Ilt.Derved opnåes en balance i CO2 "regnskabet".',
    'Afbrænding f.eks. af fossile brændstoffer, udleder CO2.',
    'Jordens skove og verdenshavene er den største "producent" af den ilt, der er nødvendig, for liv på Jorden, som vi kender det.',
    'Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag!'
  ],
  bgColor: co2Bg,
  spacer: co2Spacer
}
const climateSection = {
  header: 'KLIMA OG MILJØ?',
  image: climateImg,
  secondHeader: 'Kort om klimaet og miljøet?',
  information: [
    'Klima og miljø hænger sammen.',
    'Klimaforandringer påvirker miljøet og omvendt',
    'Miljøet kan betragtes som en organisme, og er det vi baserer vores liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en dominoeffekt, der påvirker alle dele i miljøet.',
    'Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele kloden, med ændringer i temperatur og nedbør som følge.',
    'Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre og infrastruktur, men også biodiversiteten som planter insekter mm.',
    'Din adfærd påvirker klimaet i størrer eller mindre grad.'
  ],
  bgColor: climateBg,
  spacer: climateSpacer
}
const checklistSection = {
  header: 'HVORDAN KAN JEG BIDRAGE?',
  image: checklistImg,
  secondHeader: 'Hvordan belaster du miljøet mindst muligt i dagligdagen?',
  information: [
    'Dit forbrug overordnet herunder din produktion af affald, bidrager til udledning af CO2',
    'Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over dit valg i dagligdagen.',
    'Din bolig og den måde du har indrettet dig påvirker miljøet.',
    'Jordens skove og verdenshavene er den største "producent" af den ilt, der er nødvendig, for liv på Jorden, som vi kender det.',
    'Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag!',
    'Du kan påvirke CO2 balancen, både ved at ændre små ting i din hverdag, eller ved aktivt deltage i kampen for et bedre miljø.'
  ],
  bgColor: checklistBg,
  spacer: checklistSpacer
}
const arrangementSection = {
  header: 'DELTAG I ARRANGEMENT',
  image: arrangementImg,
  secondHeader: 'Deltag i eet af vores arrangementer og gør en forskel!',
  information: [
    '“Combing” (”at fjerne affald”, f.eks. beachcombing: , rense stranden for affald og elementer der ikke hører hjemme her).  Invester en dag med familien i naturen og sammen med andre.',
    'Tilmeld dig eet arrangement i dit område',
    'Tag ansvar hjælp dit nærområde og os alle sammen generelt.',
    'Mød nye mennesker omkring en fælles opgave.',
    'Tag famillien med på en dag for naturen og vores fremtid..',
    'Tilmeld dig eet af vore arrangementer, eller modtag information om Klimatossen!',
    ' Hent mere information på siden “Tilmeld Dig”.'
  ],
  bgColor: arrangementBg
}

const allSections = [
  co2Section,
  climateSection,
  checklistSection,
  arrangementSection
]

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Quote />
      {allSections.map((section, index) => {
        return (
          <Section sectionInformation={section} key={index} />
        )
      })}
    </>
  )

}

export default App
