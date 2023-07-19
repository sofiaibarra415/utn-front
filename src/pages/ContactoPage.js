import React from "react";
import '../style/pages/contacto.css'
const ContactoPage = (props) => {
    return (
<main class="holder contacto">
        <div>
            <h2>Contacto</h2>
            <form class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li><img src="img/instagram.png" alt="instagram"/></li>
               <li><img src="img/facebook.png" alt="facebook"/></li>
               <li><img src="img/gorjeo.png" alt="twitter"/></li>
            </ul>
           
        </div>
    </main>
    );
}
export default ContactoPage;