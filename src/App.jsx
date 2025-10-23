import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Conocenos from './pages/Conocenos'
import Programas from './pages/Programas'
import Contactanos from './pages/Contactanos'
import Llevaesperanza from './pages/Llevaesperanza'
import Biblioteca from './pages/Biblioteca'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/programas/:programa" element={<Programas />} />
        <Route path="/contactanos" element= {<Contactanos />}/>
        <Route path="/Llevaesperanza" element={<Llevaesperanza />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
        <Route path='/biblioteca' element={<Biblioteca />} />
      </Routes>
    </div>
  )
}

export default App