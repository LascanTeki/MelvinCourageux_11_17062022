
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Fiche from './Pages/Fiche'
import Propos from './Pages/Propos'
import Er from './Pages/404'


function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Fiche" element={<Fiche/>} />
          <Route path="/Propos" element={<Propos/>} />
          <Route path="/*" element={<Er/>} />
        </Routes>
        
      </div>
    )
  }
  
  export default App