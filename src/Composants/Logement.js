import '../Style/Logement.css'
import list from './List.js'
import { Link } from 'react-router-dom'

function Logement() {
    
    return (
        <div className='Logement'>
            <ul>
            {list.map((list) => (
               <li className='log' key={list.id}><Link to={'/Fiche?id='+list.id}><img src={list.cover} alt={list.title} /><span>{list.title}</span></Link></li>
                ))} 
            </ul>
        </div>
    )
}

export default Logement