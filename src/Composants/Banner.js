
import '../Style/Banner.css'

function Banner(props) {
    let sized =""
    let Ban = props.Ban
    let txt = props.txt
    

    //changes class so media can be different
    if (Ban === "/static/media/Prop.796d007cebdd47cc489b.jpg") {
        sized="size"
    }
    
    return (
        <div className={'Banner'+sized}>
                 <img src={Ban} alt='Chez vous, partout et ailleurs' className={'ban'+sized} />
                 <div className='bantxt'>{txt}</div>
        </div>
    )
}

export default Banner
