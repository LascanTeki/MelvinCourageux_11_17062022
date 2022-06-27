import Gallery from '../Composants/Gallery'
import Description from '../Composants/Description'
import list from '../Composants/List'
import Deroulant from '../Composants/Deroulant';
import { Navigate } from 'react-router-dom';

function filterphoto(value, list) {
    return list.filter(d => d.id === value);

}

function Fiche() {

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let value = params.id;


    let newlist = filterphoto(value, list);

    if (newlist[0]===undefined) {
        return <Navigate to='/404'  />
    }

    let eq = newlist[0].equipments

    let equipement =(<ul> {eq.map((eq) => (
        <li key={eq}>{eq}</li>
    ))}</ul>)

        

    return (
        <div><Gallery newlist={newlist}/><Description newlist={newlist}/><div className='flexed'><Deroulant content={newlist[0].description} title="Description" /><Deroulant content={equipement} title="Equipements" /></div></div>
    )
  }
  
  export default Fiche