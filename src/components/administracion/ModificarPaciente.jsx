import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const ModificarPaciente = ({ onCancel, selectedPaciente }) => {

    const [domicilio, setDomicilio] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const paciente = {
      domicilio: domicilio
    };
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/pacientes/modificar/${paciente.domicilio}/${selectedPaciente.id}`,
        {},
        {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
      );
      console.log(response.data);
      alert("Paciente modificado correctamente");
      setDomicilio("");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div class='div-form flex'>
            <h2 class='title-form'>Modificar Odontólogo</h2>
        <form class='flex form' onSubmit={handleSubmit}>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" value={selectedPaciente.nombre} disabled/>
            <label for="lastname">Apellido</label>
            <input type="text" id="name" name="lastname" value={selectedPaciente.apellido} disabled/>
            <label for="matricula">Domicilio</label>
            <input type="text" id="name" name="domicilio" value={domicilio} onChange={(event) => setDomicilio(event.target.value)} required/>
            <label for="lastname">DNI</label>
            <input type="text" id="name" name="lastname" value={selectedPaciente.dni} disabled/>
            <label for="lastname">Fecha de alta</label>
            <input type="text" id="name" name="lastname" value={selectedPaciente.fechaDeAlta} disabled/>
            <Button variant="success" type="submit">Modificar</Button>{' '}
        </form>
        </div>
    )}

    export default ModificarPaciente