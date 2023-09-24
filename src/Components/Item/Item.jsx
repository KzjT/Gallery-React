import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const scrollToTop2 = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 100);
};

  return (
    <div className="card"> 
      <div className="containerObras">
        <img className="card-image" src={producto.img} alt={producto.id} />
      </div>
      <div className="card-content"> 
        <p className="card-title">{producto.artist}</p> 
        <p className="card-category">{producto.category}</p> 
        <div className="viewContainer">
          <Link to={`/detail/${producto.id}`} onClick={scrollToTop2} className="card-button"> 
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
