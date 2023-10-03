
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Fiche from './Pages/Fiche'
import Propos from './Pages/Propos'
import Er from './Pages/404'
import Header from './Composants/Header'



function App() {
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/MelvinCourageux_11_17062022/" element={<Home/>} />
          <Route path="/MelvinCourageux_11_17062022/Fiche" element={<Fiche/>} />
          <Route path="/MelvinCourageux_11_17062022/Propos" element={<Propos/>} />
          <Route path="/MelvinCourageux_11_17062022/*" element={<Er/>} />
        </Routes>
        
      </div>
    )
  }
  
  export default App