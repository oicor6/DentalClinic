import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

const ContextGlobal = createContext()

const Context = ({ children }) => {
    const [odontologos, setOdontologos] =useState([])
    const [pacientes, setPacientes] =useState([])
    const [loading2,setLoading2] = useState(false)
  

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
        odontologos,setOdontologos, getOdontologos, pacientes, setPacientes, getPacientes
      }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default Context

export const useContextGlobal =() => {
  return useContext(ContextGlobal)
}