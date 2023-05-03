import React, { useEffect, useState } from 'react'

const Pacientes = () => {
    const [pacientes, setPacientes] = useState([])
    useEffect(() => {
        const url = 'http://localhost:8080/mostrarPacientes'

        const aux = {
            method: 'GET',
            mode: "no-cors",
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            }
        }
        fetch(url, aux)
        .then(res => res.json())
        .then(data =>console.log(data))
    
    }, [])
        
  return (
    <div>Pacientes</div>
  )
}

export default Pacientes