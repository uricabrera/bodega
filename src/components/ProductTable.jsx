import ProductCell from "./ProductCell";
import {products} from "../fake-data/fakeProducts";
import {AiFillPlusCircle} from "react-icons/ai";
import {BiHome} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState,useEffect,useContext} from "react";
import {PaginationContext} from "../contexts/PaginationContext";
import {UserContext} from "../contexts/UserContext";


const ProductTable = ({input}) => {

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const {pagination,setNumberPages,clearPagination} = useContext(PaginationContext);

    const {user} = useContext(UserContext);

    

    const [productsToFetch,setProductsToFetch] = useState(null);





    function traerItems(){
        console.log("Entre en la función!")
        let itemsArray;
        var xmlhttp1 = new XMLHttpRequest();
        xmlhttp1.onreadystatechange = function() {
            if (xmlhttp1.readyState==4 && xmlhttp1.status==200) {
                let respuesta1 = xmlhttp1.responseText;
                console.log(respuesta1)
                itemsArray = JSON.parse(respuesta1);
                console.log(itemsArray);
                setNumberPages(Number(itemsArray[0]));
                setProductsToFetch(itemsArray[1]);
            }}
        var cadenaParametros = `Search=${encodeURIComponent(input.search)}&Filter=${encodeURIComponent(input.filter)}&SelectedPage=${encodeURIComponent(pagination.selectedPage)}&idCuenta=${encodeURIComponent(user.idCuenta)}`;
        xmlhttp1.open('POST', '../php/buscar_items.php',true);
        xmlhttp1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp1.send(cadenaParametros);
        return itemsArray;
    }


    useEffect( () => {
        const interval = setInterval(async () => {
            await traerItems();
        }, 3000);
        return () => clearInterval(interval);
    },[input,pagination.selectedPage])




    let sanitizedInput = camelize(input.filter)



    return(
        <section>
            <div className="container">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th scope="col" id="responsive-table__cantidad">Cantidad</th>
                        <th scope="col" id="responsive-table__nombreComercial">Nombre Comercial</th>
                        <th scope="col" id="responsive-table__laboratorio">Laboratorio</th>
                        <th scope="col" id="responsive-table__monodroga">Monodroga</th>
                        {/* <th scope="col" id="responsive-table__stock">Stock</th> */ }
                        <th scope="col" id="responsive-table__suDescuento">Su Descuento</th>
                        <th scope="col" id="responsive-table__precio">Precio</th>
                        <th scope="col" id="responsive-table__precioConDescuento">Precio Con Desc.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productsToFetch ? ( input.search ? productsToFetch.filter((product) => product[sanitizedInput].toLowerCase().includes(input.search.toLowerCase())).map((product) => (
                            <ProductCell key={product.id} descuentoLista={product.descuentoLista} {...product} />
                        )) : productsToFetch.map((product) => (
                            <ProductCell key={product.id} descuentoLista={product.descuentoLista} {...product} />
                        )) ) : ""
                    }
                    </tbody>
                </table>
                {
                    user["admin"] === "1" ? (
                        <div className={"container__add"}>
                            <Link to="/dashboard/addproduct" style={{color: 'inherit', textDecoration: 'inherit'}}>
                                <AiFillPlusCircle/>
                            </Link>
                        </div>
                    ) : ""
                }
            </div>
        </section>
    )
}

export default ProductTable;