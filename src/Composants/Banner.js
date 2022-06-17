
import '../Style/Banner.css'

function Banner(props) {
    
    let Ban = props.Ban
    let txt = props.txt

    return (
        <div className='Banner'>
                 <img src={Ban} alt='Chez vous, partout et ailleurs' className='ban' />
                 <div className='bantxt'>{txt}</div>
        </div>
    )
}

export default Banner
