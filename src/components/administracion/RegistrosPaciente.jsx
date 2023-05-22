import React, { useEffect, useState }  from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContextGlobal } from '../Utils/global.context';
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare, faX} from "@fortawesome/free-solid-svg-icons";
import {} from '@fortawesome/free-regular-svg-icons'
import ModificarPaciente from './ModificarPaciente';

library.add(faPenToSquare, faX);

const RegistrosPaciente = ({}) => {
  const {pacientes, getPacientes,setPacientes} = useContextGlobal();
  const [paciente, setPaciente] = useState('')
  const [pacienteData, setPacienteData] = useState([])
  const [mostrarModificar, setMostrarModificar] = useState(false);
  
  const [selectedPaciente, setSelectedPaciente] = useState(null);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/pacientes/mostrar', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    setPacienteData(response.data);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    fetchData();
  }, []);


  const buscar = () => {
    setPacientes([])
    getPacientes(paciente)
    console.log(pacientes)
    }
    
    const eliminar = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/pacientes/eliminar/${id}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        setPacienteData(pacienteData.filter(p => p.id !== id));
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
    
  const handleClickModificar = (p) => {
    setSelectedPaciente(p)
    setMostrarModificar(true);
  }

  const handleClickCancelar = () => {
    setMostrarModificar(false);
  }

    return (
      <div>
      {mostrarModificar ? (
        <ModificarPaciente onCancel={handleClickCancelar} selectedPaciente={selectedPaciente}/>
      ) : (
        <section class='registro flex'>
          <div class='search'>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder='Nombre' value= {paciente}
onChange={event => { setPaciente(event.target.value)}}/>
            <Button onClick={buscar} variant="light">Buscar</Button>{' '}
          </div>
          <div class='scroll'>
          {pacientes.length === 0 ?
    <Table striped bordered hover class='scroll'>
        <thead>
        <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Domicilio</th>
                        <th>DNI</th>
                        <th>Fecha de alta</th>
                        <th class='column-admin'></th>
                    </tr>
        </thead>
        <tbody>
        {pacienteData.map( p => (
                    <tr>
                    <td>{p.nombre}</td>
                    <td>{p.apellido}</td>
                    <td>{p.domicilio}</td>
                    <td>{p.dni}</td>
                    <td>{p.fechaDeAlta}</td>
                    <td>
                    <Button variant="info" onClick={() => handleClickModificar(p)}><FontAwesomeIcon icon={faPenToSquare}/></Button>{' '}
                    <Button variant="danger" onClick={() => eliminar(p.id)}><FontAwesomeIcon icon={faX}/></Button>{' '}
                    </td>
                  </tr>
        ))}
</tbody>
</Table> : 
<Table striped bordered hover>
<thead>
        <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Domicilio</th>
                        <th>DNI</th>
                        <th>Fecha de alta</th>
                        <th class='column-admin'></th>
                    </tr>
        </thead>
        <tbody>
        {pacientes.map( p => (
                    <tr>
                    <td>{p.nombre}</td>
                    <td>{p.apellido}</td>
                    <td>{p.domicilio}</td>
                    <td>{p.dni}</td>
                    <td>{p.fechaDeAlta}</td>
                    <td>
                    <Button variant="info" onClick={() => handleClickModificar(o)}><FontAwesomeIcon icon={faPenToSquare}/></Button>{' '}
                    <Button variant="danger" onClick={() => eliminar(o.id)}><FontAwesomeIcon icon={faX}/></Button>{' '}
                    </td>
                  </tr>
        ))}
        </tbody>
</Table>
}
</div>
    </section>
      )}
    </div>
  );
      }
  
  export default RegistrosPaciente

