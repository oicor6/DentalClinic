import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const AgregarOdont = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [matricula, setMatricula] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const odontologo = {
      nombre: nombre,
      apellido: apellido,
      matricula: matricula
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/odontologos/agregar`,
        odontologo
      );
      console.log(response.data);
      alert("Odontólogo guardado correctamente");
      setNombre("");
      setApellido("");
      setMatricula("");
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div class='div-form flex'>
            <h2 class='title-form'>Agregar Odontólogo</h2>
        <form class='flex form' onSubmit={handleSubmit}>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>
            <label for="lastname">Apellido</label>
            <input type="text" id="name" name="lastname" value={apellido} onChange={(event) => setApellido(event.target.value)} required/>
            <label for="matricula">Matricula</label>
            <input type="text" id="name" name="matricula" value={matricula} onChange={(event) => setMatricula(event.target.value)} required/>
            <Button variant="success" type="submit">Agregar</Button>{' '}
        </form>
        </div>
    )}

export default AgregarOdont