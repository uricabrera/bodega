import {CartContext} from "../contexts/CartContext";
import {useContext} from "react";
import {FaRegFilePdf} from "react-icons/fa";

const CartCheckoutTable = () => {

    const {cart} = useContext(CartContext);



    return(
        <section>
            <div className="container-cart">
                <div className="row">
                    <h3 className="label_solicitud">Cantidad</h3>
                    <input className="row_input"></input>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Descripción</h3>
                    <input className="row_input"></input>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Fecha de Entrega</h3>
                    <input className="row_input"></input>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Requiere Aprobación de Diseño</h3>
                    <div className="div_input">
                        <label class="switch">
                            <input type="checkbox" checked></input>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Número de Plano</h3>
                    <input className="row_input"></input>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Adjuntar Plano</h3>
                    <div className="div_input">
                        <FaRegFilePdf className="icon_upload" />
                    </div>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Requiere Pie de Máquina</h3>
                    <div className="div_input">
                        <label class="switch">
                            <input type="checkbox" checked></input>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <h3 className="label_solicitud">Observaciones</h3>
                    <textarea className="row_input"></textarea>
                </div>
            </div>
        </section>
    )
}


export default CartCheckoutTable;