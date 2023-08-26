import cartt from "../../img/cartt.svg"
import "./CartWidget.scss"

export const CartWidget = () => {

    return(
        <div className="divCarrito container col-2">
        
        <img className="cart" src={cartt} alt="cart" />

        <span className="spanCart">0</span>
        
        </div>
    );

};

export default CartWidget;