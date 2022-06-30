import {useHistory} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const ProductsAdmin = () => {



    let history = useHistory();

    /*

    useState ----> stock: 0

    */

    const [inputSubmit, setInputSubmit] = useState({
        nombreComercial: "",
        laboratorio: "",
        proveedor: "",
        precio: "",
        image: "",
        codigoInterno: "",
        descuentoLista: 0,
        coberturaPami: 0
    })


    const onChange = (e) => {

        if(e.target.name === "image"){
            console.log(e.target.files);
            setInputSubmit({
                ...inputSubmit,
                image: e.target.files[0]
            })
        }else {
            setInputSubmit({
                ...inputSubmit,
                [e.target.name]: e.target.value
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputSubmit);
        const formData = new FormData();
        // subirItem();
        formData.append("nombreComercial", inputSubmit["nombreComercial"]);
        formData.append("laboratorio", inputSubmit["laboratorio"]);
        formData.append("proveedor", inputSubmit["proveedor"]);
        formData.append("precio", inputSubmit["precio"]);
        formData.append("image", inputSubmit["image"]);
        formData.append("codigoInterno",inputSubmit["codigoInterno"]);
        formData.append("descuentoLista", inputSubmit["descuentoLista"]);
        formData.append("coberturaPami", inputSubmit["coberturaPami"]);
        axios
            .post("../php/guardar_item_imagen.php", formData)
            .then((res) => {
                console.log("File Upload success",res);
            })
            .catch((err) => console.log("File Upload Error", err));
        history.push("/dashboard/store");
    }

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/dashboard/store");
    }







    return(
        <div>
            <h4 style={{"textAlign": "center"}}>
                Añadir Producto
            </h4>
            <form className="addproductform" encType="multipart/form-data">
                <label htmlFor="nombreComercial" className="addproductform__label">Cliente</label>
                <input type="text" id={"nombreComercial"} name="nombreComercial" className="addproductform__text"
                       onChange={onChange}/>
                <label htmlFor="codigoInterno" className="addproductform__label">Código Interno</label>
                <input type="text" id={"codigoInterno"} name="codigoInterno" className="addproductform__text"
                       onChange={onChange}/>
                <label htmlFor="descuentoLista" className="addproductform__label">Descuento Lista</label>
                <input type="text" id={"descuentoLista"} name="descuentoLista" className="addproductform__text"
                       onChange={onChange}/>
                <label htmlFor="laboratorio" className="addproductform__label">Producto</label>
                <input type="text" id={"laboratorio"} name="laboratorio" className="addproductform__text"
                       onChange={onChange}/>
                <label htmlFor="proveedor" className="addproductform__label">Proveedor</label>
                <input type="text" id={"proveedor"} name="proveedor" className={"addproductform__text"}
                       onChange={onChange}/>
                <label htmlFor="pami" className="addproductform__label">Etapa De Desarrollo</label>
                <div id={"pami"} className="addproductform__productformchoice">
                    <div>
                        <input type="radio" name="coberturaPami" id={"nopami"} value={1} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="nopami">Solicitud De Presupuesto</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={2} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Análisis De Factibilidad</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={3} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Desarrollo Estructural</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={4} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Prototipo Aprobado</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={5} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Pedido De Cotización</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={6} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Cotizado</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={7} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Asignado y No Asignado</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={8} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Proceso De Aprobación De Diseño</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={9} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">En Producción Con Pie De Máquina</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={10} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">En Producción</label>
                    </div>
                    <div>
                        <input type="radio" name="coberturaPami" id={"conpami"} value={11} className="addproductform__radio"
                               onChange={onChange}/>
                        <label htmlFor="conpami">Entregado</label>
                    </div>

                </div>

                {

                    /*


                <label htmlFor="stock" className={"addproductform__label"}>Stock</label>
                <div id={"stock"}>
                    <input type="radio" name="stock" id={"constock"} value={1} className="addproductform__radio" onChange={onChange}/>
                    <FaCheck className="addproductform__label__constock"/>
                    <input type="radio" name="stock" id={"commecistock"} value={0} className="addproductform__radio" onChange={onChange}/>
                    <FaCheck className="addproductform__label__commecistock"/>
                    <input type="radio" name="stock" id={"nostock"} value={-1} className="addproductform__radio" onChange={onChange}/>
                    <FaTimes className="addproductform__label__nostock"/>
                </div>




                    */
                }
                <label htmlFor="precio" className="addproductform__label">Precio</label>
                <input type="text" id={"precio"} name={"precio"} className="addproductform__text" onChange={onChange}/>
                <label htmlFor="image" className="addproductform__label">Imagen</label>
                <input type="file" id="image" name="image" onChange={onChange}/>
                <div>
                    <button className="searchbar_form_submit addproductform__cancel" onClick={onCancel}>Cancelar
                    </button>
                    <input type="submit" value={"Subir Producto"}
                           className="addproductform__submit searchbar_form_submit" onClick={onSubmit}/>
                </div>
            </form>
        </div>
    )
}


export default ProductsAdmin;