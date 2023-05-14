import React, {useState, useEffect, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import  {useContextGlobal}  from '../components/Utils/global.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Navbar = () => {
  const {userDB, id} = useContextGlobal();
  let location = useLocation()

  const refresh = () => {
    const cerrarSesion = window.confirm("¿Desea cerrar sesión?");
    if (cerrarSesion) {
      setUserDB({ ...userDB, name: '', lastName: '' ,email: '', login: false , rol: ''});
      localStorage.clear();
      location.replace('/');
    }
  }
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
          {console.log(userDB)}
            {userDB.rol == 'USER' ? (
              <div class='avatar flex'>
                <div class='flex'>
                    <p className = 'hello'>Hola</p>
                    <p className = 'nameUser'>{` ${', '} ${userDB.name} `}</p>
                </div>
                <Link to={'/'} onClick={()=> refresh()} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><p><FontAwesomeIcon icon={faRightFromBracket} /></p></Link>
                </div>
              ) : ( userDB.rol == 'ADMIN' ?
              <div class='avatar flex'>
              <div class='flex'>
                  <p className = 'hello'>Hola</p>
                  <p className = 'nameUser'>{` ${', '} ${userDB.name} `}</p>
              </div>
              <Link to={'/'} onClick={()=> refresh()} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><p><FontAwesomeIcon icon={faRightFromBracket} /></p></Link>
              </div> : 
                <Link to={'/login'} class="nav-link active"><h5>Ingresar</h5></Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
