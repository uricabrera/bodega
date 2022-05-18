import {FaCheck,FaTimes} from "react-icons/fa";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const AddProductForm = () => {

    let history = useHistory();

    /*

    useState ----> stock: 0

    */

    const [inputSubmit, setInputSubmit] = useState({
        nombreComercial: "",
        laboratorio: "",
        monodroga: "",
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
        formData.append("monodroga", inputSubmit["monodroga"]);
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


    {
        /*



    function subirItem(){
        var xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState==4 && xmlhttp1.status==200) {
                let respuesta1 = xmlhttp1.responseText;
                console.log(respuesta1)
            }}
        var cadenaParametros = 'nombreComercial='+encodeURIComponent(inputSubmit["nombreComercial"])+'&laboratorio='+encodeURIComponent(inputSubmit["laboratorio"])+'&monodroga='+encodeURIComponent(inputSubmit["monodroga"])
            +"&precio="+encodeURIComponent(inputSubmit["precio"])+"&coberturaPami="+encodeURIComponent(inputSubmit["coberturaPami"])+"&image="+encodeURIComponent(inputSubmit["image"])+"&descuentoLista="+encodeURIComponent(inputSubmit["descuentoLista"])+"&codigoInterno="+encodeURIComponent(inputSubmit["codigoInterno"]);
        xmlhttp1.open('POST', '../php/guardar_item_imagen.php',true);
        xmlhttp1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp1.send(cadenaParametros);
    }

        */
    }







    return(
        <form className="addproductform" enctype="multipart/form-data">
            <label htmlFor="nombreComercial" className="addproductform__label">Nombre Comercial</label>
            <input type="text" id={"nombreComercial"} name="nombreComercial" className="addproductform__text" onChange={onChange}/>
            <label htmlFor="codigoInterno" className="addproductform__label">Código Interno</label>
            <input type="text" id={"codigoInterno"} name="codigoInterno" className="addproductform__text" onChange={onChange}/>
            <label htmlFor="descuentoLista" className="addproductform__label">Descuento Lista</label>
            <input type="text" id={"descuentoLista"} name="descuentoLista" className="addproductform__text" onChange={onChange}/>
            <label htmlFor="laboratorio" className="addproductform__label">Laboratorio</label>
            <input type="text" id={"laboratorio"} name="laboratorio" className="addproductform__text" onChange={onChange}/>
            <label htmlFor="monodroga" className="addproductform__label">Monodroga</label>
            <input type="text" id={"monodroga"} name="monodroga" className={"addproductform__text"} onChange={onChange}/>
            <label htmlFor="pami" className="addproductform__label">Cobertura Pami</label>
            <div id={"pami"}>
                    <input type="radio" name="coberturaPami" id={"nopami"} value={0} className="addproductform__radio" onChange={onChange}/>
                    <label htmlFor="nopami">Sin Cobertura</label>
                    <input type="radio" name="coberturaPami" id={"conpami"} value={1} className="addproductform__radio" onChange={onChange}/>
                    <label htmlFor="conpami">Con Cobertura</label>
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
                <button className="searchbar_form_submit addproductform__cancel" onClick={onCancel}>Cancelar</button>
                <input type="submit" value={"Subir Producto"} className="addproductform__submit searchbar_form_submit" onClick={onSubmit}/>
            </div>
        </form>
    )
}


export default AddProductForm;