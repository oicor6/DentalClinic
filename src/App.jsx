import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {routes} from './Routes'
import Home from './pages/Home'
import Pacientes from './pages/Pacientes'
import Odontologos from './pages/Odontologos'
import './App.css'
import Login from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path={routes.pacientes} element={<Pacientes/>} />
        <Route path='/administration' element={<Odontologos/>} />
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
