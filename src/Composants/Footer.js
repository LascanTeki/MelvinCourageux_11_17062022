import '../Style/Footer.css'
import logo from '../Assets/footer.jpg'

function Footer() {
    
    return (
        <footer>
                 <img src={logo} alt='Kasa' className='foot' />
                 <div className='copyright'>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer