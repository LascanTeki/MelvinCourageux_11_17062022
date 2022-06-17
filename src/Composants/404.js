import '../Style/404.css'
import { Link } from 'react-router-dom'

function Eror() {

    return (
        
        <div className="error">
            <div className='name'>404</div>
            <div className='message'>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
  }

  export default Eror