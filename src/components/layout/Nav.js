import { Link } from "react-router-dom";
import '../../style/nav.css';
const Nav = (props) => {
    return(
        <nav>
        <ul class="">
            <li><Link className="activo" to="/">Inicio</Link></li>
            <li><Link to="/recetas">Recetas</Link></li>
            <li><Link to="/sugerencias">Sugerencias</Link></li>
            <li><Link to="/Tips">Tips</Link></li>
            <li><Link to="/novedades">Novedades</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
    );
}
export default Nav;