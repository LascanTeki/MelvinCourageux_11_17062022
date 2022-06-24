
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Fiche from './Pages/Fiche'
import Propos from './Pages/Propos'
import Er from './Pages/404'
import Header from './Composants/Header'
import Footer from './Composants/Footer'


function App() {
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Fiche" element={<Fiche/>} />
          <Route path="/Propos" element={<Propos/>} />
          <Route path="/*" element={<Er/>} />
        </Routes>
        <Footer/>
      </div>
    )
  }
  
  export default App