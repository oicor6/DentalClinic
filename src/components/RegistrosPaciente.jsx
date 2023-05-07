import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const RegistrosPaciente = () => {
    return (
        <section class='registro flex'>
          <div class='search'>
          <label for="name"></label>
          <input type="text" id="name" name="name"/>
            <Button variant="light">Buscar</Button>{' '}
          </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Domicilio</th>
                        <th>DNI</th>
                        <th>Fecha de alta</th>
                        <th class='column-admin'></th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>42589635</td>
                    <td>Av. Independencia 358</td>
                    <td>
                    <Button variant="info"><img className='logo-admin' src='public\editar.png'></img></Button>{' '}
                    <Button variant="danger"><img className='logo-admin' src='public\eliminar.png'></img></Button>{' '}
                    </td>
                  </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </section>
    )
  }
  
  export default RegistrosPaciente