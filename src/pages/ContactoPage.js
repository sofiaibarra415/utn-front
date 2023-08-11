import React from "react";
import '../style/pages/contacto.css'
const ContactoPage = (props) => {
    return (
<main class="holder contacto">
        <div>
            <h2 className="contacto">Contacto</h2>
            <form class="formulario">
                <p className="correcto">
                    <label for="nombre">Nombre: </label>
                    <input type="text"/>
                </p>
                <p className="correcto">
                    <label for="email">Email: </label>
                    <input type="text"/>
                </p>
                <p className="correcto">
                    <label for="telefono">Telefono: </label>
                    <input type="text"/>
                </p>
                <p className="correcto">
                    <label for="mensaje">Mensaje: </label>
                    <textarea name=""></textarea>
                </p>
                <p className="correcto">
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
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