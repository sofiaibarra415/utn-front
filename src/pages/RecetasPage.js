import React from "react";
import '../style/pages/recetas.css'
const RecetasPage = (props) => {
    return (
        <>
<main className="holder">
        <div>
            <h2 className="hola">Hola!</h2>
            <p className="continuacion">A continuación, te mostramos algunas preparaciones fáciles
                y prácticas para mejorar tus comidas.
                Son recetas dulces para variar desayunos y meriendas. Son super deliciosas y saciantes!</p>
        </div>
        <div className="staff">
            <h2 className="hola">Recetas</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/muffin.jpg" alt="Muffin sin harina"/>
                    <h5 className="hola">Muffin sin harinas</h5>
                    <br />
                    <h6>Conservalos en la heladera y
                        comelos fríos ; ideal como postre!</h6>
                    <p className="cuerpo">Procesar o mixear 3 bananas, 5 cucharadas soperas de cacao amargo en polvo, 2 huevos, 1
                        cucharadita de polvo de hornear, Extracto de vainilla, 1 cucharadita de canela. Volcar en moldes
                        de muffins; llevar a horno precalentado unos 10 minutos.</p>

                </div>
                <div className="persona">
                    <img src="img/budin.jpg" alt="Budin de banana"/>
                    <h5 className="hola">Budin de banana</h5>
                    <br />
                    <h6>Es bueno acostumbrarse al dulce
                        natural, en este caso de las frutas ;
                        en la medida que puedas comenzá a
                        disminuir el agregado de azúcar, miel, edulcorantes .</h6>
                    <p className="cuerpo">Procesar la avena con el polvo de hornear.
                        Por otra parte licuar las bananas, con los
                        huevos, las pasas de uva y el extracto de
                        vainilla. Mezclar ambas preparaciones
                        (idealmente con un batidor de mano para
                        que no se formen grumos) y volcar sobre
                        budinera. Llevar al horno hasta que al
                        introducir un cuchillo o palillo salga limpio.</p>

                </div>
                <div className="persona">
                    <img className="diferente" src="img/trufas.jpg" alt="Trufas de dátiles"/>
                    <h5 >Trufas de dátiles y cacao amargo</h5>
                    <br />
                    <h6>Los dátiles son ideales para endulzar
                        a las preparaciones de forma mas
                        natural.</h6>
                    <p className="cuerpo">Procesar los dátiles junto con el cacao
                        amargo. Dar forma de bombones con la
                        mano y pasar por coco rallado. Llevar a
                        heladera o freezer por una hora.</p>

                </div>
            </div>
        </div>
    </main>
    </>
    );
}
export default RecetasPage;