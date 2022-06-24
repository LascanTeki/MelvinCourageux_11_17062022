import Banner from '../Composants/Banner'
import Ban from '../Assets/Prop.jpg'
import Deroulant from '../Composants/Deroulant';

let fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
let Respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
let Service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
let Sécurité ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

function Propo() {
    return (
        <div><Banner txt="" Ban={Ban}/><div className='Propos'><Deroulant content={fiabilité} title="Fiabilité" /><Deroulant content={Respect} title="Respect" /><Deroulant content={Service} title="Service" /><Deroulant content={Sécurité} title="Sécurité" /></div></div>
    )
  }

  
  export default Propo