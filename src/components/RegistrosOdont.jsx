import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useContextGlobal } from './Utils/global.context';
import axios from 'axios'

const RegistrosOdont = ({}) => {
  const {odontologos, getOdontologos,setOdontologos} = useContextGlobal();
  const [odont, setOdont] = useState('')
  
  const [odontologosData, setOdontologosData] = useState([])
  const fetchData = async () => {
    await axios(`http://localhost:8080/odontologos/mostrar`)
    .then(res => setOdontologosData(res.data))
    .catch((error) => console.error(error))
  }
    useEffect(() => {
      fetchData()
  },[])

  const buscar = () => {
    setOdontologos([])
    getOdontologos(odont)
    console.log(odontologos)
    }

    return (
        <section class='registro flex'>
          <div class='search'>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder='Nombre' value= {odont}
onChange={event => { setOdont(event.target.value)}}/>
            <Button onClick={buscar} variant="light">Buscar</Button>{' '}
          </div>
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
                    <Button variant="info"><img className='logo-admin' src='public\editar.png'></img></Button>{' '}
                    <Button variant="danger"><img className='logo-admin' src='public\eliminar.png'></img></Button>{' '}
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
    </section>
    )
  }
  
  export default RegistrosOdont