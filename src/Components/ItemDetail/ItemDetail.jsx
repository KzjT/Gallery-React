import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.scss"
import AddItemButton from "../AddItemButton/AddItemButton";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({ producto }) => {


    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    const formatter2 = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className="container-detail">

            <div className="detail-content">
                <div className="img-container">
                    <img className="img-detail" src={producto.img} alt={producto.name} />
                </div>
                <div className="info-detail">
                    <h2 className="name-detail">{producto.name}</h2>
                    <hr />
                    <p className="detail-info" data-label="Categoría">{producto.category}</p>
                    <p className="detail-info" data-label="Artist">{producto.artist}</p>
                    <p className="detail-info" data-label="Origin"> {producto.origin}</p>
                    <p className="detail-info" data-label="Size"> {producto.size}</p>
                    <hr />
                    <span className="priceObras">{formatter2.format(producto.price)}</span>
                    <hr />
                    <div className="ItemCountContainer">
                        <p className="cantObras">Cant: {producto.cant}</p>
                        <ItemCount />
                    </div>

                    <AddItemButton className="addItemButton" />
                    <div className="btn-containers">

                        <Link className="btn btn-primary btn-volver" onClick={handleVolver}>Volver</Link>

                    </div>

                </div>

            </div>
        </div>
    );

}

export default ItemDetail;