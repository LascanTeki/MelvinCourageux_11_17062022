import logo from '../Assets/logo.jpg'
import '../Style/Header.css'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header>
            <img src={logo} alt='Kasa' className='logo' />
            <nav><Link to="/">Acceuil</Link><Link to="/Propos">A Propos</Link></nav>
        </header>
    )
}

export default Header