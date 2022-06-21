import '../Style/Footer.css'
import logo from '../Assets/footer.jpg'

function Footer() {
    
    return (
        <div className='Footer'>
                 <img src={logo} alt='Kasa' className='foot' />
                 <div className='copyright'>© 2020 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer