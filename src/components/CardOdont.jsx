import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import RegistrosOdont from './RegistrosOdont'
import RegistrosPaciente from './RegistrosPaciente'
import AgregarPaciente from './AgregarPaciente'
import AgregarOdont from './AgregarOdont'

const CardOdont = () => {

    const [section, setSection] = useState(null)

    const handleSectionClick = (event, section) => {
      event.preventDefault()
      setSection(section)
    }
  
    const renderSection = () => {
      switch (section) {
        case 'registrosPaciente':
          return <RegistrosPaciente />
        case 'agregarPaciente':
          return <AgregarPaciente />
        case 'registrosOdont':
          return <RegistrosOdont />
        case 'agregarOdont':
          return <AgregarOdont />
        default:
          return <RegistrosOdont />
      }
    }

    return (
        <section class='container grid'>
            <div class="a">
                    <h5 class='primary-list'>Pacientes</h5>
                        <ul class='secundary-list'>
                            <li><Link to="/agregar-paciente" onClick={(e) => handleSectionClick(e, 'agregarPaciente')}>Agregar</Link></li>
                            <li><Link to="/registros-paciente" onClick={(e) => handleSectionClick(e, 'registrosPaciente')}>Buscar</Link></li>
                            </ul>
                    <h5 class='primary-list'>Odontólogo</h5>
                        <ul class='secundary-list'>
                            <li><Link to="/agregar-odont" onClick={(e) => handleSectionClick(e, 'agregarOdont')}>Agregar</Link></li>
                            <li><Link to="/registros-odont" onClick={(e) => handleSectionClick(e, 'registrosOdont')}>Buscar</Link></li>
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
  
  export default CardOdont