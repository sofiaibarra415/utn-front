import React from "react";
import '../style/pages/home.css'
const InicioPage = (props) => {
    return (
        <>
<main className="">
        <div className="padre">
            <img className="imagen" src="img/nutricion.jpg" alt="comida"/>
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Este es un espacio de salud y bienestar, donde nuestro objetivo es ayudar a quienes tengan ganas de
                    generar nuevos habitos, incorporando nuevas rutinas, nuevos alimentos y nuevos conocimientos acerca
                    de lo que le sirve mas a tu cuerpo, pero sin dejar de disfrutar. Te acompañaremos en esta
                    transición!</p>
            </section>
            <section className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span class="cita">"Desde que modifiqué mis hábitos tuve notorios cambios" </span>
                    <span class="autor">Miranda Rodriguez</span>
                </div>
            </section>
        </div>

    </main>
    </>
    );
}
export default InicioPage;