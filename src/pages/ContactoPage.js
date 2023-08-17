import React from "react";
import '../style/pages/contacto.css'
import {useState} from 'react';
import axios from 'axios';
const ContactoPage = (props) => {

const initialForm = {
    nombre:'',
    email:'',
    telefono:'',
    mensaje:''
}
const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);

const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]: value
    }));
}
const handleSubmit = async e =>{
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error ===false){
        setFormData(initialForm)
    }
}
    return (
<main class="holder contacto">
        <div>
            <h2 className="contacto">Contacto</h2>
            <form action="/contacto"  method="post" className="formulario" onSubmit={handleSubmit}>
                <p className="correcto">
                    <label for="nombre">Nombre: </label>
                    <input className="espacio" type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p className="correcto">
                    <label for="email">Email: </label>
                    <input className="espacio" type="text"name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p className="correcto">
                    <label for="telefono">Telefono: </label>
                    <input className="espacio" type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p className="correcto">
                    <label for="mensaje" >Mensaje: </label>
                    <textarea className="espacio" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p className="correcto">
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
            {sending ? <p>Enviando...</p>: null}
            {msg ? <p>{msg}</p> : null}
        </div>
        <div class="datos">
            <h2 className="contacto">Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
            <ul className="papa">
                <li className="hijo"><img src="img/instagram.png" alt="instagram"/> @sofianutricion </li>
               <li className="hijo"><img src="img/facebook.png" alt="facebook"/> nutricionSI </li>
               <li className="hijo"><img src="img/gorjeo.png" alt="twitter"/>sofiaibarranutri</li>
            </ul>
           
        </div>
    </main>
    );
}
export default ContactoPage;