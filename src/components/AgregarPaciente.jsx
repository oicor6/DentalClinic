import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AgregarPaciente = () => {
    const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [dni, setDni] = useState("");
  const [fechaDeAlta, setFechaDeAlta] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const paciente = {
      nombre: nombre,
      apellido: apellido,
      domicilio: domicilio,
      dni: dni,
      fechaDeAlta: fechaDeAlta
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/pacientes/agregar`,
        paciente
      );
      console.log(response.data);
      alert("Paciente guardado correctamente");
      setNombre("");
      setApellido("");
      setDomicilio("");
      setDni("");
      setFechaDeAlta(null);
    } catch (error) {
      console.error(error);
    }
  };
    return (
            <div class='div-form flex'>
            <h2 class='title-form'>Agregar Paciente</h2>
        <form class='flex form' onSubmit={handleSubmit}>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>
            <label for="lastname">Apellido</label>
            <input type="text" id="name" name="lastname"value={apellido} onChange={(event) => setApellido(event.target.value)} required/>
            <label for="domicilio">Domicilio</label>
            <input type="text" id="name" name="domicilio" value={domicilio} onChange={(event) => setDomicilio(event.target.value)} required/>
            <label for="dni">DNI</label>
            <input type="text" id="name" name="dni" value={dni} onChange={(event) => setDni(event.target.value)} required/>
            <label for="fecha">Fecha de Alta</label>
            <DatePicker
          selected={fechaDeAlta}
          onChange={(date) => setFechaDeAlta(date)}
          dateFormat="yyyy-MM-dd"
        />
            <Button variant="success" type="submit">Agregar</Button>{' '}
        </form>
        </div>
    )}

export default AgregarPaciente