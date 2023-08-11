import React from "react";
import '../style/pages/home.css'
const InicioPage = (props) => {
    return (
        <>
            <main className="">
                <div className="padre">
                    <img className="imagen" src="img/nutricion.png" alt="comida" />
                </div>
                <div className="columnas">
                    <section className="bienvenidos">
                        <h2 className="clase1">Bienvenidos</h2>
                        <div className="contenedorcentrar">
                        <div className="centrar">
                            <p className="intro">Este es un espacio de salud y bienestar, donde nuestro objetivo es ayudar a quienes tengan ganas de
                                generar nuevos habitos, incorporando nuevas rutinas, nuevos alimentos y nuevos conocimientos acerca
                                de lo que le sirve mas a tu cuerpo, pero sin dejar de disfrutar. Te acompañaremos en esta
                                transición!</p>
                        </div>
                        </div>
                    </section>
                    <section className="testimonios">
                        <h2 className="clase1">Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita">"Desde que modifiqué mis hábitos tuve notorios cambios" </span>
                            <span className="autor">Miranda Rodriguez</span>
                        </div>
                    </section>
                </div>

            </main>
        </>
    );
}
export default InicioPage;