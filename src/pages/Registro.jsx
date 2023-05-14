import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import  {useContextGlobal}  from '../components/Utils/global.context';
import Button from 'react-bootstrap/Button';
import useInput from '../components/Utils/useInput'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Registro = () => {
const {userDB,setUserDB} = useContextGlobal();
const nameSurnameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
const passwordRegex = /^(?=\w*[a-z])\S{6,}$/;
const name = useInput('text', 'name',nameSurnameRegex);
const email = useInput('email', 'email',emailRegex)
const password = useInput('password', 'password',passwordRegex);
const confirmPassword = useInput('password', 'password',passwordRegex);
const passwordsMatch = password.value === confirmPassword.value
const [validPass,setValidPass] = useState(true)
const [invalidPassMsg,setInvalidPassMsg] = useState('')
const [msg, setMsg] = useState()
const navigate = useNavigate()

    const fetchData = async () => {
    let status = undefined
    let error = undefined
    try{
    const response = await axios.post('http://localhost:8080/users/save', {
        nombre: name.value,
        email: email.value,
        pass: password.value,
        rol: 'USER'
})
  status = response.status

  if (status === 201) {
    axios.post('http://localhost:8080/registrar', {
    username: email.value,
    pass: password.value,
  })
  .then(response => {
    if (response.status === 200) {
      const {token} = response.data
      localStorage.setItem('token', token);
      localStorage.getItem('token')
    }})
    setUserDB({
      name: name.value,
      email: email.value,
    });
    navigate('/');
  } else if(error){
    setMsg(`Lamentablemente no ha podido registrarse. Por favor intente más tarde`)
  } else {
    setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde')
  }
  
  }catch(err){
    error = error = err.response.data.error
  }
}
const onClick = (e) =>{
  e.preventDefault();
  if(name.value !== null && email.value !== null &&
    name.value !== undefined  && email.value !== undefined){
    if(name.isvalid &&  email.isvalid && password.isvalid && passwordsMatch){
      fetchData()
    }else{
      setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
    } 
  } else{
    setMsg('Lamentablemente no ha podido registrarse. Por favor intente más tarde');
    }
  if(passwordsMatch === true && password.isvalid){
    setValidPass(true)
    setInvalidPassMsg('')
  }else{
    setValidPass(false)
    setInvalidPassMsg('Las contraseñas no coinciden')
  }
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className='login flex'>
      <Link className='closeLogin' to={'/'}><FontAwesomeIcon icon={faChevronLeft} /></Link>
        <h1>Registrarse</h1>
        <form class='form-login'>
              <div className='loginCampos flex'>
                <label>Nombre</label>
                <input {...name} className='input-login' required/>
                <p class='red'>{name.msg}</p>
              <label>Correo electrónico</label>
              <input {...email} className='input-login' required/>
              <p class='red'>{email.msg}</p>
              <label>Contraseña</label>
              <input {...password} className='input-login' required/>
              <p class='red'>{password.msg}</p>
              <label>Confirmar contraseña</label>
              <input {...confirmPassword} className='input-login' required/>
              <p class='red'>{confirmPassword.msg}</p>
              <p class='red'>{invalidPassMsg}</p>
              <Button onClick={onClick} type='submit' variant="outline-secondary">Crear cuenta</Button>{' '}
          </div>
          <p className='red msg-error'>{msg}</p>
          <div className='cuenta flex'>
          <p>¿Ya tienes una cuenta?</p>
          <Link to={'/login'}><p className='registroBoton'>Iniciar sesión</p></Link>
          </div>
        </form>
    </div>
  )
}

export default Registro
/*<form class='form-login'>
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
            <p>¿Aún no tenés cuenta?</p>
            <Link to={'/registro'}><p className='registroBoton'>Registrate</p></Link>
          </div>
      </form>*/