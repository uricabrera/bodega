import {FaCheck, FaTimes} from "react-icons/fa";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


const EditProductForm = ({nombreComercial,laboratorio,monodroga,coberturaPami,precio,image,id,descuentoLista,codigoInterno}) => {

    let history = useHistory();


    const [inputSubmit, setInputSubmit] = useState({
        nombreComercial,
        laboratorio,
        monodroga,
        precio,
        image,
        coberturaPami,
        id,
        codigoInterno,
        descuentoLista
    })


    const onChange = (e) => {

        if(e.target.name === "image"){
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

    function actualizarItem(){
        var xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState==4 && xmlhttp1.status==200) {
                let respuesta1 = xmlhttp1.responseText;
                console.log(respuesta1)
            }}
        var cadenaParametros = 'nombreComercial='+encodeURIComponent(inputSubmit["nombreComercial"])+'&laboratorio='+encodeURIComponent(inputSubmit["laboratorio"])+'&monodroga='+encodeURIComponent(inputSubmit["monodroga"])
            +"&precio="+encodeURIComponent(inputSubmit["precio"])+"&coberturaPami="+encodeURIComponent(inputSubmit["coberturaPami"])+"&id="+encodeURIComponent(inputSubmit["id"])+"&image="+encodeURIComponent(inputSubmit["image"])+"&codigoInterno="+encodeURIComponent(inputSubmit["codigoInterno"])+"&descuentoLista="+encodeURIComponent(inputSubmit["descuentoLista"]);
        xmlhttp1.open('POST', '../../php/actualizar_item_imagen.php',true);
        xmlhttp1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp1.send(cadenaParametros);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputSubmit);
        //actualizarItem();
        const formData = new FormData();
        formData.append("nombreComercial", inputSubmit["nombreComercial"]);
        formData.append("laboratorio", inputSubmit["laboratorio"]);
        formData.append("monodroga", inputSubmit["monodroga"]);
        formData.append("precio", inputSubmit["precio"]);
        formData.append("image", inputSubmit["image"]);
        formData.append("codigoInterno",inputSubmit["codigoInterno"]);
        formData.append("descuentoLista", inputSubmit["descuentoLista"]);
        formData.append("coberturaPami", inputSubmit["coberturaPami"]);
        axios
            .post("../../php/guardar_item_imagen.php", formData)
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
        <form className="editproductform">
            <label htmlFor="nombreComercial" className="editproductform__label">Nombre Comercial</label>
            <input type="text" id={"nombreComercial"} value={inputSubmit["nombreComercial"]} name={"nombreComercial"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="codigoInterno" className="editproductform__label">Código Interno</label>
            <input type="text" id={"codigoInterno"} value={inputSubmit["codigoInterno"]} name={"codigoInterno"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="descuentoLista" className="editproductform__label">Descuento Lista</label>
            <input type="text" id={"descuentoLista"} value={inputSubmit["descuentoLista"]} name={"descuentoLista"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="laboratorio" className="editproductform__label">Laboratorio</label>
            <input type="text" id={"laboratorio"} value={inputSubmit["laboratorio"]} name={"laboratorio"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="monodroga" className="editproductform__label">Monodroga</label>
            <input type="text" id={"monodroga"} value={inputSubmit["monodroga"]} name={"monodroga"} className={"editproductform__text"} onChange={onChange}/>
            <label htmlFor="pami" className="editproductform__label">Cobertura Pami</label>
            <div id={"coberturaPami"}>
                <input type="radio" name="coberturaPami" id={"nopami"} value={0} defaultChecked={coberturaPami == "0" ? true : false}  className="editproductform__radio" onChange={onChange}/>
                <label htmlFor="nopami">Sin Cobertura</label>
                <input type="radio" name="coberturaPami" id={"conpami"} value={1} defaultChecked={coberturaPami == "1" ? true : false} className="editproductform__radio" onChange={onChange}/>
                <label htmlFor="conpami">Con Cobertura</label>
            </div>
            {
                /*

            <label htmlFor="stock" className={"editproductform__label"}>Stock</label>
            <div id={"stock"}>
                <input type="radio" name="stock" id={"constock"} value={1} defaultChecked={stock == "1" ? true : false} className="editproductform__radio" onChange={onChange}/>
                <FaCheck className="editproductform__label__constock"/>
                <input type="radio" name="stock" id={"commecistock"} value={0} defaultChecked={stock == "0" ? true : false} className="editproductform__radio" onChange={onChange}/>
                <FaCheck className="editproductform__label__commecistock"/>
                <input type="radio" name="stock" id={"nostock"} value={-1} defaultChecked={stock == "-1" ? true : false} className="editproductform__radio" onChange={onChange}/>
                <FaTimes className="editproductform__label__nostock"/>
            </div>


                 */
            }

            <label htmlFor="precio" className="editproductform__label">Precio</label>
            <input type="text" id={"price"} value={inputSubmit["precio"]} name={"precio"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="image" className="editproductform__label">Imagen</label>
            <input type="file" id="image" name="image" onChange={onChange}/>
            <div>
                <button className="searchbar_form_submit editproductform__cancel" onClick={onCancel}>Cancelar</button>
                <input type="submit" value={"Editar Producto"} className="editproductform__submit searchbar_form_submit" onClick={onSubmit}/>
            </div>
        </form>
    )
}

export default EditProductForm;