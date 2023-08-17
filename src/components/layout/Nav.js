import { Link, useLocation } from "react-router-dom";
import '../../style/nav.css';
const Nav = () => {
    const location = useLocation();
    return(
        <nav>
        <ul class="">
            <li><Link className={location.pathname === "/" && "activo"} to="/">Inicio</Link></li>
            <li><Link className={location.pathname === "/recetas" && "activo"} to="/recetas">Recetas</Link></li>
            <li><Link className={location.pathname === "/sugerencias" && "activo"} to="/sugerencias">Sugerencias</Link></li>
            <li><Link className={location.pathname === "/Tips" && "activo"} to="/Tips">Tips</Link></li>
            <li><Link className={location.pathname === "/novedades" && "activo"} to="/novedades">Novedades</Link></li>
            <li><Link className={location.pathname === "/contacto" && "activo"} to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
    );
}
export default Nav;