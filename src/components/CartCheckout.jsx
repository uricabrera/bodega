
import CartCheckoutTable from "./CartCheckoutTable";
import {CartContext} from "../contexts/CartContext";
import {useContext} from "react";
import axios from "axios";
import {UserContext} from "../contexts/UserContext";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const CartCheckout = () => {

    const {cart,clearCart} = useContext(CartContext);
    const {user} = useContext(UserContext);

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("cart",JSON.stringify(cart));
        console.log("Console log de carrito: ", cart);
        formData.append("idCuenta",user["idCuenta"]);
        formData.append("descuento",user["descuento"]);
        formData.append("nombreFarmacia", user["datos"]["nombreFarmacia"]);
        console.log("Console log de formData: ",formData);
        clearCart();
        axios
            .post("../php/checkout.php",formData)
            .then((res) => {
                toast.success("Éxito con el envío del pedido!");
                console.log(res);
                history.push("/dashboard/store");
            })
            .catch((err) => {
                toast.error("Error!");
                console.log(err);
                history.push("/dashboard/store");
            })
    }

    return(
        <div className="cartcheckout cartcheckout__section">
            <h2 className="cartcheckout__title" style={{fontWeight:100}}>Solicitud De Cotización</h2>
            <CartCheckoutTable/>
            <input className="cartcheckout__submit"  value={"Enviar Cotización"} type="submit" onClick={onSubmit}/>
        </div>
    )
}


export default CartCheckout;