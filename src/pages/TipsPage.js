import React from "react";
import '../style/pages/tips.css'
const TipsPage = (props) => {
    return (
<main class="holder">
        <div class="Tips">
            <div class="tip">
                <img src="img/activo.jpg" alt="Budin de banana"/>
                <h5>Mantenerse activo</h5>
                <br />
                <h6>Siempre está bueno hacer algun tipo de actividad fisica, al menos un ratito!</h6>
            </div>
            <div class="tip">
                <img src="img/agua.jpg" alt="Budin de banana"/>
                <h5>Tomar agua suficiente</h5>
                <br />
                <h6>Se recomienda siempre tomar entre 1 litro y 2.</h6>
            </div>
            <div class="tip">
                <img src="img/dormir.jpg" alt="Budin de banana"/>
                <h5>Dormir las horas necesarias</h5>
                <br />
                <h6>Para que el cuerpo pueda descansar correctamente, se necesita dormir entre 7 y 8 horas por dia.</h6>
            </div>
            <div class="tip">
                <img src="img/equilibrio.jpg" alt="Budin de banana"/>
                <h5>Tener un equilibrio</h5>
                <br />
                <h6>Lo importante es tener un balance, no hay que ir a un extremo! Permitite tus gustos y no te frustres
                    ni exijas de más.</h6>
            </div>
            <div class="tip">
                <img src="img/disfrutaelproceso.jpg" alt="Budin de banana"/>
                <h5>Disfruta el proceso</h5>
                <br />
                <h6>Todo cambio lleva tiempo!Lo importante es que lo disfrutes y veas los pequeños cambios.</h6>
            </div>

        </div>
    </main>
    );
}
export default TipsPage;