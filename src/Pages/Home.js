import Banner from '../Composants/Banner'
import Logement from '../Composants/Logement'
import Ban from '../Assets/Banner.jpg'

function Home() {
    return (
        <div><Banner txt="Chez vous, partout et ailleurs" Ban={Ban}/><Logement/></div>
    )
  }

  
  export default Home