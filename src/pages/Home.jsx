import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <section class='home flex'>
      <div class='welcome flex'>
        <h1 class='title'>¡Bienvenido a Dent Clinic! </h1>
        <p>Estamos encantados de que hayas decidido confiar en nosotros para cuidar de tu salud bucal. Con esta aplicación, tendrás acceso a información sobre nuestros odontólogos, horarios y podrás reservar citas con facilidad. ¡Esperamos que disfrutes de la experiencia y que puedas sacar el máximo provecho de ella para mantener tu sonrisa radiante!</p>
      </div>
      </section>
    <Footer/>
    </div>
  )
}

export default Home