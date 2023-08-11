import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from "../components/novedades/novedadItem";

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            console.log(response.data)
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
    
    return (
        <section className="holder">
            <h2 className='primero'>Contanos tu experiencia siguiendo los planes de #SofiaNutrición y comparti tu foto de alguna receta que hayas hecho!</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    nombre={item.nombre} testimonio={item.testimonio}
                    imagen={item.img_id} body={item.cuerpo} />)

            )}
        </section>
    );
}
export default NovedadesPage;