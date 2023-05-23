import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import Turnos from './Turnos.jsx'
import RegistrarPacientes from './RegistrarTurnos.jsx'

const Card = () => {
    const [section, setSection] = useState(null)

    const handleSectionClick = (event, section) => {
      event.preventDefault()
      setSection(section)
    }
  
    const renderSection = () => {
      switch (section) {
        case 'registrosPaciente':
          return <RegistrarPacientes />
        default:
          return <Turnos />
      }
    }

    return (
        <section class='container grid'>
            <div class="a">
                    <h5 class='primary-list'>Turnos</h5>
                        <ul class='secundary-list'>
                            <li><Link to="/agregar-turnos" onClick={(e) => handleSectionClick(e, 'registrosPaciente')}>Agregar</Link></li>
                            <li><Link to="/turnos" onClick={(e) => handleSectionClick(e, 'turnos')}>Buscar</Link></li>
                            </ul>
            </div>
            <div class="b">
              {section === null ? 
              <div>
              <section class='welcome flex'>
                  <img class='img-admin' src="public\Administration.png"></img>
                  <h2 class="admin-p">Administración de Dent Clinic</h2>
                </section>
              </div>
              : renderSection()}
            </div>
        </section>
    )
  }
  
  export default Card