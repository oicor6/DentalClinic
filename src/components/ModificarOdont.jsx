import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const ModificarOdont = ({ onCancel, selectedOdontologo }) => {
    const [matricula, setMatricula] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const odontologo = {
      matricula: matricula
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/odontologos/modificar/${odontologo.matricula}/${selectedOdontologo.id}`,
      );
      console.log(response.data);
      alert("Odontólogo modificado correctamente");
      setMatricula("");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class='div-form flex'>
            <h2 class='title-form'>Modificar Odontólogo</h2>
        <form class='flex form' onSubmit={handleSubmit}>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" value={selectedOdontologo.nombre} disabled/>
            <label for="lastname">Apellido</label>
            <input type="text" id="name" name="lastname" value={selectedOdontologo.apellido} disabled/>
            <label for="matricula">Matricula</label>
            <input type="text" id="name" name="matricula" value={matricula} onChange={(event) => setMatricula(event.target.value)} required/>
            <Button variant="success" type="submit">Modificar</Button>{' '}
        </form>
        </div>
    )}

    export default ModificarOdont