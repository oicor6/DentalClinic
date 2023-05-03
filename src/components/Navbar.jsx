import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section class="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="nav2 flex">
          <div class='divLogo flex container-fluid'>
            <Link to={'/'}><img class='logo' src='public\logo.png'></img></Link>
            <p>¡Sonríele a la vida!</p>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Ingresar</a>
              <a class="nav-link active" aria-current="page" href="#">Registrarse</a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
/*       
<Link to='/home'><h3>Home</h3></Link>
        <Link to='/pacientes'><h3>Pacientes</h3></Link>
        <Link to='/odontologos'><h3>Odontologos</h3></Link>
        */