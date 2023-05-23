import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import  {useContextGlobal}  from '../components/Utils/global.context';
import Button from 'react-bootstrap/Button';
import useInput from '../components/Utils/useInput'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const {userDB,setUserDB,userData} = useContextGlobal();
  const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
  const [msg, setMsg] = useState();
  const navigate = useNavigate()
  const email = useInput('email', 'email',emailRegex)
  const password = useInput('password', 'password')

const onClick = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8080/login', {
    username: email.value,
    password: password.value,
  })
  .then(response => {
    if (response.status === 200) {
      const {token} = response.data
      localStorage.setItem('token', token);
      localStorage.getItem('token')
      setUserDB({ ...userDB, logIn: true , email: email.value});
      navigate('/');
    } else {
      setMsg('Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde.');
    }
  })
  .catch(error => {
    setMsg('Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde.');
  });
};

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className='login flex'>
      <Link className='closeLogin' to={'/'}><FontAwesomeIcon icon={faChevronLeft} /></Link>
        <h1>Iniciar sesión</h1>
        <form class='form-login'>
          <div className="loginCampos flex">
            <label>Correo electronico</label>
            <input {...email} className='input-login' />
            <p class='red'>{email.msg}</p>
            <label>Contraseña</label>
            <input {...password} className='input-login'/>
            <p class='red'>{password.msg}</p>
            
            <Button onClick={onClick} type='submit' variant="outline-secondary">Buscar</Button>{' '}
            
          </div>
          <p className='red msg-error'>{msg}</p>
          <div className="cuenta flex">
            <p>¿Olvidate la contraseña?</p>
            <Link to={'/a'}><p className='registroBoton'>Recuperar</p></Link>
          </div>
      </form>
    </div>
  )
}

export default Login
/*<div className="cuenta flex">
            <p>¿Aún no tenés cuenta?</p>
            <Link to={'/registro'}><p className='registroBoton'>Registrate</p></Link>
          </div>*/