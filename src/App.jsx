import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {routes} from './Routes'
import Home from './pages/Home'
import Pacientes from './pages/Pacientes'
import Odontologos from './pages/Odontologos'
import './App.css'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={routes.login} element={<Login/>} />
        <Route path='/' element={<Home/>}/>
        <Route path={routes.pacientes} element={<Pacientes/>} />
        <Route path={routes.odontologos} element={<Odontologos/>} />
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </div>
  )
}

export default App
