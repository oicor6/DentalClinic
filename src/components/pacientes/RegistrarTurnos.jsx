import React,{ useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  {useContextGlobal}  from '../Utils/global.context';

const Login = () => {
    const [fechaTurno, setFechaTurno] = useState(null);
    const [paciente, setPaciente] = useState("");
    const [odontologo, setOdontologo] = useState("");
    const [listOdont, setListOdont] = useState([]);
    const [odontSelected, setOdontSelected] = useState();
    const [loading,setLoading] = useState(false);
    const {userDB, id} = useContextGlobal();

    const [turno, setTurno] = useState({
            fechaTurno: '',
            paciente : userDB.id,
            odontologo : ''
    })

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/odontologos/mostrar', {
              headers: {
                'Authorization': 'Bearer ' + token
              }
            });
            setListOdont(response.data);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);

        const handleSubmit = async (event) => {
        event.preventDefault();
    
        /*const turno = {
            fechaTurno: fechaTurno,
            paciente : {id: userDB.id},
            odontologo : {id: Number(odontSelected)}
        };*/
    
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `http://localhost:8080/turnos/agregar`,
                turno,
            {
                headers: {
                    'Authorization': 'Bearer ' + token
            }
            }
            );
            alert("Turno guardado correctamente");
            setFechaTurno("");
            setPaciente({});
            setOdontologo({});
            } catch (error) {
                console.log(turno)
            console.error(error);
        }
    };

      useEffect(()=>{
        if(odontSelected){
            setTurno({ ...turno, odontologo: {"id": Number(odontSelected)}})
        }
      },[odontSelected])

      useEffect(()=>{
        if(fechaTurno){
        setTurno({ ...turno, fechaTurno: fechaTurno})
      }}, [fechaTurno])
      

    return (
        <div class='div-form flex'>
            <h2 class='title-form'>Agregar Turno</h2>
            <form class='flex form' onSubmit={handleSubmit}>
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" value={userDB.name} disabled/>
                <label >Odontologos</label>
                <select class='select' value={odontSelected} onChange={(e) => setOdontSelected(e.target.value)} required>
                    <option value="" selected disabled>Selecciona un odontologo...</option>
                    {listOdont.map(item => (
                        <option key={item.id} value={item.id} id={item.id}>{item.nombre}</option>
                    ))}
                </select>
                <label for="fecha">Fecha del turno</label>
                <DatePicker
                    selected={fechaTurno}
                    onChange={(date) => setFechaTurno(date)}
                    dateFormat="yyyy-MM-dd"
                />
            <Button variant="success" type="submit">Agregar</Button>{' '}
        </form>
        </div>
    )}

export default Login