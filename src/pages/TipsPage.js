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
                <h6>Siempre está bueno hacer algun tipo de actividad fisica, al menos un ratito! Reduce los riesgos a tu salud, fortalece tus huesos y músculos, mejora tu habilidad para hacer actividades diarias y prevenir caídas y aumenta tus posibilidades de vivir una vida más larga.</h6>
            </div>
            <div class="tip">
                <img src="img/agua.jpg" alt="Budin de banana"/>
                <h5>Tomar agua suficiente</h5>
                <br />
                <h6>Se recomienda siempre tomar entre 1 litro y 2. Elimina los desechos a través de la orina, la transpiración y las deposiciones.
                Mantiene la temperatura en niveles normales, lubrica y amortigua las articulaciones y protege los tejidos sensibles.

                </h6>
            </div>
            <div class="tip">
                <img src="img/dormir.jpg" alt="Budin de banana"/>
                <h5>Dormir las horas necesarias</h5>
                <br />
                <h6>Para que el cuerpo pueda descansar correctamente, se necesita dormir entre 7 y 8 horas por dia, Educe la frecuencia de enfermedades, ayuda a mantener un peso saludable y reducir tu riesgo de problemas graves de salud, como diabetes y enfermedades del corazón.</h6>
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