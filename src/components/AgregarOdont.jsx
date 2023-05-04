import React from 'react'
import Button from 'react-bootstrap/Button';

const AgregarOdont = () => {
    return (
        <div class='div-form flex'>
            <h2 class='title-form'>Agregar Odontólogo</h2>
        <form class='flex form'>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name"/>
            <label for="lastname">Apellido</label>
            <input type="text" id="name" name="lastname"/>
            <label for="matricula">Matricula</label>
            <input type="text" id="name" name="matricula"/>
            <Button variant="success">Agregar</Button>{' '}
        </form>
        </div>
    )}

export default AgregarOdont