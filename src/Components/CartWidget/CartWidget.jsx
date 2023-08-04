import cartt from "../../img/cartt.svg"
import "./CartWidget.scss"

export const CartWidget = () => {

    return(
        <div className="divCarrito">
        
        <img className="cart" src={cartt} alt="cart" />

        <span className="spanCart">0</span>
        
        </div>
    );

};

export default CartWidget;