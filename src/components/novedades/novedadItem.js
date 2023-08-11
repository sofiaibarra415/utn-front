import React from 'react';

const NovedadItem = (props) => {
    const {nombre, testimonio, imagen, body} = props;
    const imagenData = `https://res.cloudinary.com/dkpc18twj/image/upload/c_fill,h_100,w_100/${imagen}`
    return(
        <div className="novedades">
            <h1 className='first'>{nombre}</h1>
            <h2 className='testimonio'>{testimonio}</h2>
            <img className='foto' alt='prop'  src={imagenData}/>
            <div dangerouslySetInnerHTML={{ __html: body}}/>
            <hr/>
        </div>
    );
}
export default NovedadItem;