import React from "react";
import "./Item.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="Item-contenedor">
      <div className="containerObras">
        <img className="imgObras" src={producto.img} alt={producto.id} />
      </div>
      <div className="ItemDatosContainer">
        <p className="nameObras">{producto.name}</p>
        <p className="artistObras">{producto.artist}</p>
        <p className="originObras">{producto.origin}</p>
        <p className="sizeObras">{producto.size}</p>
        <span className="priceObras">{formatter.format(producto.price)}</span>
        <Link to={`/detail/${producto.id}`} className="btn btn-outline-primary">
          Ver más
        </Link>
        <small>Categoría: {producto.categoria}</small>
      </div>
      <div className="ItemCountContainer">
        <ItemCount />
      </div>
    </div>
  );
};

export default Item;
