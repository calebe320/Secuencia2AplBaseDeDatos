import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/BarraNavegacion'
import { Home } from './components/Inicio'
import { Mostrar } from './components/Mostrar'
import { Altas } from './components/Altas'
import { Buscar } from './components/Buscar'

function App() {
  return (
    <>
      <div className='w3-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/mostrar" element={<Mostrar/>}></Route>
          <Route path="/altas" element={<Altas/>}></Route>
          <Route path="/buscar" element={<Buscar/>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
