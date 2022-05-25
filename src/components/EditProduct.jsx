import {useParams} from "react-router-dom";
import EditProductForm from "./EditProductForm";
import {useEffect, useState} from "react";

const EditProduct = () => {

    const { id } = useParams();

    const [productToFetch,setProductToFetch] = useState(null);


    function traerItem(){
        let itemArray;
        var xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState==4 && xmlhttp1.status==200) {
                let respuesta1 = xmlhttp1.responseText;
                console.log(respuesta1)
                itemArray = JSON.parse(respuesta1);
                console.log(itemArray)
                setProductToFetch(itemArray)
            }}
        var cadenaParametros = "id="+encodeURIComponent(id);
        xmlhttp1.open('POST', '../../php/buscar_item.php',true);
        xmlhttp1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp1.send(cadenaParametros);
        return itemArray;
    }


    useEffect(async () => {
        await traerItem();
    },[])



    return (
        <div>
            <h1 className="editproduct__title">Editar producto </h1>
            {
                productToFetch ? <EditProductForm {...productToFetch[0]}/> : ""
            }
        </div>
    )
}


export default EditProduct;