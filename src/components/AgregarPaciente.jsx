import React from 'react'
import Button from 'react-bootstrap/Button';

const AgregarPaciente = () => {
    return (
            <div class='div-form flex'>
            <h2 class='title-form'>Agregar Paciente</h2>
        <form class='flex form'>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name"/>
            <label for="lastname">Apellido</label>
            <input type="text" id="name" name="lastname"/>
            <label for="domicilio">Domicilio</label>
            <input type="text" id="name" name="domicilio"/>
            <label for="dni">DNI</label>
            <input type="text" id="name" name="dni"/>
            <label for="fecha">Fecha de Alta</label>
            <input type="text" id="name" name="fecha"/>
            <Button variant="success">Agregar</Button>{' '}
        </form>
        </div>
    )}

export default AgregarPaciente