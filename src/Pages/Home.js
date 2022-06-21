import Banner from '../Composants/Banner'
import Header from '../Composants/Header'
import Logement from '../Composants/Logement'
import Footer from '../Composants/Footer'
import Ban from '../Assets/Banner.jpg'

function Home() {
    return (
        <div><Header/><Banner txt="Chez vous, partout et ailleurs" Ban={Ban}/><Logement/></div>
    )
  }

  
  export default Home