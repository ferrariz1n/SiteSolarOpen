import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Bemvindo from './paginas/Bemvindo'
import EstilosGlobais from './componentes/EstilosGlobais'
import Medidas from './paginas/Medidas'
import Mensagens from './paginas/Mensagens'
import Admin from './paginas/Admin'
import Menu from './componentes/Menu'
import DetalhesDevice from './componentes/DetalhesDevice'

function App(){
  return(
    <Router>
      <EstilosGlobais/>
      <Menu/>
      <Routes>
        <Route path='/' element = {<Bemvindo />}/>
        <Route path='/medidas' element = {<Medidas />}/>
        <Route path='/medidas/:id' element = {<DetalhesDevice />}/>
        <Route path='/admin' element = {<Admin />}/>
        <Route path='/mensagens' element = {<Mensagens />}/>
      </Routes>
    </Router>
  )
}
export default App