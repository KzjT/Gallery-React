import React from "react";
import "./Item.scss"
import ItemCount from "../ItemCount/ItemCount";




export const Item = ({producto}) => {

    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    
    // ...
    
    <span className="priceObras">{formatter.format(producto.price)}</span>
    

    return(

        <div className="Item-contenedor">


        <div className="containerObras">

            <img className="imgObras" src={producto.img} alt={producto.id} />

        </div>

        
        <div className="ItemDatosContainer">


            <p className="nameObras">{producto.name} </p>

            <p className="artistObras">{producto.artist}</p>

            <p className="originObras">{producto.origin}</p>

            <p className="sizeObras">{producto.size}</p>

            <span className="priceObras">{formatter.format(producto.price)}</span>


            </div>

            <div className="ItemCountContainer">
            <ItemCount/>

            </div>

            </div>


    )

}


export default Item;