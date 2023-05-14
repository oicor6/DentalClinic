import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

const Login = () => {
    const [turnos, setTurnos] = useState([])
    const fetchData = async () => {
        await axios(`http://localhost:8080/turnos/mostrar`)
        .then(res => setTurnos(res.data))
        .catch((error) => console.error(error))
      }
        useEffect(() => {
          fetchData()
      },[])
  return (
    <div class='scroll'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Paciente</th>
                        <th>Odontologo</th>
                        <th>Turno</th>
                    </tr>
                </thead>
                <tbody>
                  {turnos.map(t => (
                  <tr>
                    <td>{t.paciente}</td>
                    <td>{t.odontologo}</td>
                    <td>{t.fechaTurno}</td>
                  </tr>))}
      </tbody>
    </Table>
    </div>
  )
}

export default Login