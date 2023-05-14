import React, {useState, useEffect, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import  {useContextGlobal}  from '../components/Utils/global.context';
import CardPaciente from '../components/pacientes/CardPaciente'
import CardOdont from '../components/CardOdont'

const Home = () => {
  const {userDB, id} = useContextGlobal();
  return (
    <div>
      {userDB.rol == 'USER' ?
      <CardPaciente/> : userDB.rol == 'ADMIN' ?
      <CardOdont/> : <section class='home flex'>
      <div class='welcome flex'>
        <h1 class='title'>¡Bienvenido a Dent Clinic! </h1>
        <p>Estamos encantados de que hayas decidido confiar en nosotros para cuidar de tu salud bucal. Con esta aplicación, tendrás acceso a información sobre nuestros odontólogos, horarios y podrás reservar citas con facilidad. ¡Esperamos que disfrutes de la experiencia y que puedas sacar el máximo provecho de ella para mantener tu sonrisa radiante!</p>
      </div>
      </section>}
    </div>
  )
}

export default Home