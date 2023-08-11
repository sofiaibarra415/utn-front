import React from "react";

const NovedadItem = (props) => {
  const { nombre, testimonio, imagen } = props;
  const imagenData = imagen
    ? `https://res.cloudinary.com/dkpc18twj/image/upload/c_fill,h_100,w_100/${imagen}`
    : null;
  return (
    <div className="novedades">
      <h1 className="first">{nombre}</h1>
      <h2 className="testimonio">{testimonio}</h2>
      {imagenData && <img className="foto" alt="prop" src={imagenData} />}
      <hr />
    </div>
  );
};
export default NovedadItem;
