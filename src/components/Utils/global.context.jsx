import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

const ContextGlobal = createContext()

const Context = ({ children }) => {
    const [odontologos, setOdontologos] =useState([])
    const [pacientes, setPacientes] =useState([])
    const [loading2,setLoading2] = useState(false)
    const [userDB, setUserDB] = useState({
      name: '',
      email: '',
      logIn: false,
      rol: ''
  })
  const [userData, setUserData] = useState();

const fetchData = async () => {
  await axios(`http://localhost:8080/users/findByEmail/${userDB?.email}`)
  .then(res => setUserData(res.data))
  .catch((error) => console.log(error.message))
}

  useEffect(() => {
    if (userDB.email !== ''){
      fetchData()}
  }, [userDB.email]);

  useEffect(() => {
    setUserDB({ ...userDB, name: userData?.name, email: userData?.email , rol: userData?.rol});
  }, [userData]);

const id = userData?.id;
const [modal, setModal] = useState(false);
const toggleModal = () => {
  setModal(!modal);
};
  

const getOdontologos = (nameOdont) =>{
    const fetchData = async()=>{
      setLoading2(true)
    await axios(`http://localhost:8080/odontologos/finByName/${nameOdont}`)
    .then(res => setOdontologos(res.data))
    .catch((error) => console.error(error))
    .finally(()=>setLoading2(false))
  }
  fetchData()
  }
  
  const getPacientes = (namePaciente) =>{
    const fetchData = async()=>{
      setLoading2(true)
    await axios(`http://localhost:8080/pacientes/finByName/${namePaciente}`)
    .then(res => setPacientes(res.data))
    .catch((error) => console.error(error))
    .finally(()=>setLoading2(false))
  }
  fetchData()
  }


  return (
    <ContextGlobal.Provider 
    value={{
        odontologos,setOdontologos, getOdontologos, pacientes, setPacientes, getPacientes, userDB,setUserDB, userData, loading2,toggleModal,modal
      }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default Context

export const useContextGlobal =() => {
  return useContext(ContextGlobal)
}