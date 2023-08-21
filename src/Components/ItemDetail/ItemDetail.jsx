import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const ItemDetail = ({ producto }) => {


    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }


    return (
        <div className="container my-5">
            <h2>{producto.name}</h2>
            <hr/>
            <img src={producto.img} alt={producto.name} />
            <br />
            <small>Categoria: {producto.category}</small>
            <p>{producto.description}</p>
            <p>Precio: {producto.price}</p>

            
            <hr />
            <Link className="btn btn-primary" onClick={handleVolver}>Volver</Link>


        </div>
    )
}

export default ItemDetail;