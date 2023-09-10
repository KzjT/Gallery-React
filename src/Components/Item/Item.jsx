import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";



const Item = ({ producto }) => {


  

  return (
    <div className="Item-contenedor ">
      <div className="containerObras">
        <img className="imgObras" src={producto.img} alt={producto.id} />
      </div>
      <div className="ItemDatosContainer">
        <p className="nameObras">{producto.artist}</p>
        <p className="catObras"> {producto.category}</p>
        <div className="viewContainer"> 
        <Link to={`/detail/${producto.id}`} className="btn btn-outline-primary btn-viewMore">
  Ver más
</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
