import CartCheckoutCell from "./CartCheckoutCell";
import {CartContext} from "../contexts/CartContext";
import {useContext} from "react";


const CartCheckoutTable = () => {

    const {cart} = useContext(CartContext);



    return(
        <section>
            <div className="container container-cart">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th scope="col" id="responsive-table__checkout__cantidad">Cantidad</th>
                        <th scope="col" id="responsive-table__checkout__nombreComercial">Nombre Comercial</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            cart.filter((cartItem) => cartItem.quantity > 0).map((cartItem) => (<CartCheckoutCell cantidad={cartItem.quantity} nombreComercial={cartItem.nombreComercial}/>))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}


export default CartCheckoutTable;