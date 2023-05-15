import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContextGlobal } from '../Utils/global.context';
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faPenToSquare, faX} from "@fortawesome/free-solid-svg-icons";
import {} from '@fortawesome/free-regular-svg-icons'
import ModificarOdont from './ModificarOdont';

library.add(faPenToSquare, faX);

const RegistrosOdont = ({}) => {
  const {odontologos, getOdontologos,setOdontologos} = useContextGlobal();
  const [odont, setOdont] = useState('')
  const [odontologosData, setOdontologosData] = useState([])
  const [mostrarModificar, setMostrarModificar] = useState(false);
  const [selectedOdontologo, setSelectedOdontologo] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/odontologos/mostrar`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      });
      setOdontologosData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
    useEffect(() => {
      fetchData();
    }, []);
  

  const buscar = () => {
    setOdontologos([])
    getOdontologos(odont)
    }
    
    const eliminar = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/odontologos/eliminar/${id}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        setOdontologosData(pacienteData.filter(p => p.id !== id));
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }

  const handleClickModificar = (o) => {
    setSelectedOdontologo(o);
    setMostrarModificar(true);
  }

  const handleClickCancelar = () => {
    setMostrarModificar(false);
  }

    return (
      <div>
      {mostrarModificar ? (
        <ModificarOdont onCancel={handleClickCancelar} selectedOdontologo={selectedOdontologo}/>
      ) : (
        <section class='registro flex'>
          <div class='search'>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder='Nombre' value= {odont}
onChange={event => { setOdont(event.target.value)}}/>
            <Button onClick={buscar} variant="light">Buscar</Button>{' '}
          </div>
          <div class='scroll'>
          {odontologos.length === 0 ?
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Matricula</th>
                        <th class='column-admin'></th>
                    </tr>
                </thead>
                <tbody>
                  {odontologosData.map(o => (
                  <tr>
                    <td>{o.nombre}</td>
                    <td>{o.apellido}</td>
                    <td>{o.matricula}</td>
                    <td>
                    <Button variant="info" onClick={() => handleClickModificar(o)}><FontAwesomeIcon icon={faPenToSquare}/></Button>{' '}
                    <Button variant="danger" onClick={() => eliminar(o.id)}><FontAwesomeIcon icon={faX}/></Button>{' '}
                    </td>
                  </tr>))}
      </tbody>
    </Table> : 
    <Table striped bordered hover>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Matricula</th>
            <th class='column-admin'></th>
        </tr>
    </thead>
    <tbody>
      {odontologos.map(o => (
      <tr>
        <td>{o.nombre}</td>
        <td>{o.apellido}</td>
        <td>{o.matricula}</td>
        <td>
        <Button variant="info"><img className='logo-admin' src='public\editar.png'></img></Button>{' '}
        <Button variant="danger"><img className='logo-admin' src='public\eliminar.png'></img></Button>{' '}
        </td>
      </tr>))}
</tbody>
</Table>
    }
    </div>
    </section>
      )}
    </div>
    )
  }
  
  export default RegistrosOdont