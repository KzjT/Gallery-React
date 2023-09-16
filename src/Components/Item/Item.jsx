import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card"> {/* Aplicamos la clase "card" para los estilos de tarjeta */}
      <div className="containerObras">
        <img className="card-image" src={producto.img} alt={producto.id} />
      </div>
      <div className="card-content"> {/* Aplicamos la clase "card-content" */}
        <p className="card-title">{producto.artist}</p> {/* Aplicamos la clase "card-title" */}
        <p className="card-category">{producto.category}</p> {/* Aplicamos la clase "card-category" */}
        <div className="viewContainer">
          <Link to={`/detail/${producto.id}`} className="card-button"> {/* Aplicamos la clase "card-button" */}
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
