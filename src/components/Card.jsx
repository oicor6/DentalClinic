import React from 'react'
import RegistrosOdont from './RegistrosOdont'
import RegistrosPaciente from './RegistrosPaciente'
import AgregarPaciente from './AgregarPaciente'
import AgregarOdont from './AgregarOdont'

const Card = () => {
    return (
        <section class='container grid'>
            <div class="a">
                    <h5 class='primary-list'>Pacientes</h5>
                        <ul class='secundary-list'>
                            <li>Agregar</li>
                            <li>Buscar</li>
                        </ul>
                    <h5 class='primary-list'>Odontólogo</h5>
                        <ul class='secundary-list'>
                            <li>Agregar</li>
                            <li>Buscar</li>
                        </ul>
            </div>
            <div class="b">
                <RegistrosOdont/>
            </div>
        </section>
    )
  }
  
  export default Card