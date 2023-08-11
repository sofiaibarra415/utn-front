import React from "react";
import '../style/pages/sugerencias.css'
const SugerenciasPage = (props) => {
    return (
        <>
<main class="holder">
        <h2 className="hola">Sugerencias para planificar tu alimentación</h2>
        <div class="sugerencias">
            <img src="img/lista.png" className="estudio" alt="listado"/>
            <div class="info">
                <h4 className="hola">Listado y menú semanal</h4>
                <p>Arma un menú semanal; luego hace un listado de los
                    alimentos necesarios para cada una de esas preparaciones.
                    Chequea lo que ya tenes en casa de esa lista, y entonces
                    compra solo lo que falta.</p>
            </div>
        </div>
        <div className="sugerencias">
            <img src="img/libro.png" alt="listado"/>
            <div class="info">
                <h4>Comida para llevar</h4>
                <p>¿Desayunas en el trabajo, facultad o colegio y terminas
                    comiendo galletitas? Hay muchas opciones saludables para
                    llevarte: frutas, frutos secos, muffins o budines del recetario..
                    solo es cuestión de dejarte el tupper listo la noche anterior..</p>
            </div>
        </div>
        <div className="sugerencias">
            <img src="img/frutero.png" alt="listado"/>
            <div class="info">
                <h4>Consumo de frutas</h4>
                <p>Frutas: si las compras pero te cuesta incorporarlas dejalas a
                    la vista; tenerlas en una fuente en la mesa favorece su
                    consumo.</p>
            </div>
        </div>
    </main>
    </>
    );
}
export default SugerenciasPage;