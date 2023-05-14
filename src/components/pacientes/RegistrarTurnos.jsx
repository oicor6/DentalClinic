import React,{ useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Login = () => {
    const [fechaTurno, setFechaTurno] = useState(null);
    const [paciente, setPaciente] = useState("");
    const [odontologo, setOdontologo] = useState("");
    const [listOdont, setListOdont] = useState([]);
    const [odontSelected, setOdontSelected] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const fetchData1 = async ()=>{
            setLoading(true)
            await axios('http://localhost:8080/odontologos/mostrar')
            .then(res => setListOdont(res.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }

        fetchData1();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const turno = {
            fechaTurno: fechaTurno,
            paciente: paciente,
            odontologo: odontologo
        };

        try {
            const response = await axios.post(
                `http://localhost:8080/turnos/agregar`,
                turno
            );
            console.log(response.data);
            alert("Turno guardado correctamente");
            setFechaTurno("");
            setPaciente("");
            setOdontologo("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div class='div-form flex'>
            <h2 class='title-form'>Agregar Odontólogo</h2>
            <form class='flex form' onSubmit={handleSubmit}>
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" value={paciente} onChange={(e) => setPaciente(e.target.value)} required/>
                <label >Odontologos</label>
                <select value={odontSelected} onChange={(e) => setOdontSelected(e.target.value)} required>
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