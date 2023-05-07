import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

const ContextGlobal = createContext()

const Context = ({ children }) => {
    const [odontologos, setOdontologos] =useState([])
    const [nombre, setNombre] =useState("")
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
  
  return (
    <ContextGlobal.Provider 
    value={{
        odontologos,setOdontologos, getOdontologos
      }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export default Context

export const useContextGlobal =() => {
  return useContext(ContextGlobal)
}