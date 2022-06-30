import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import coberturaPamiGrande from "./../media/cobertura-pami-mediano.png";
import {GrClose} from "react-icons/gr";
import {useHistory} from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: "relative"
    },
}));

export default function AnimatedModal({show,handleClose,imgUrl,nombreComercial,pami}) {
    const classes = useStyles();


    let history = useHistory();


    const [inputSubmit, setInputSubmit] = useState({
        
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
        var cadenaParametros = 'nombreComercial='+encodeURIComponent(inputSubmit["nombreComercial"])+'&laboratorio='+encodeURIComponent(inputSubmit["laboratorio"])+'&proveedor='+encodeURIComponent(inputSubmit["proveedor"])
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
        formData.append("proveedor", inputSubmit["proveedor"]);
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

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={show}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={show}>
                    <div className={classes.paper} >
                        <h2 style={{textAlign: "center"}}>{nombreComercial}</h2>
                        <img src={imgUrl} alt="" width={300} height={300} />
                        {pami === "1" && (<img src={coberturaPamiGrande} alt="Cobertura Pami Grande" className="modal_image_pami"/>)}
                        <GrClose className="modal_image_close" onClick={handleClose}/>
                        <form className="editproductform">
                            <label htmlFor="nombreComercial" className="editproductform__label">Cliente</label>
                            <input type="text" id={"nombreComercial"} value={inputSubmit["nombreComercial"]} name={"nombreComercial"} className="editproductform__text" onChange={onChange}/>
                            <label htmlFor="codigoInterno" className="editproductform__label">Código Interno</label>
                            <input type="text" id={"codigoInterno"} value={inputSubmit["codigoInterno"]} name={"codigoInterno"} className="editproductform__text" onChange={onChange}/>
                            <label htmlFor="descuentoLista" className="editproductform__label">Descuento Lista</label>
                            <input type="text" id={"descuentoLista"} value={inputSubmit["descuentoLista"]} name={"descuentoLista"} className="editproductform__text" onChange={onChange}/>
                            <label htmlFor="laboratorio" className="editproductform__label">Producto</label>
                            <input type="text" id={"laboratorio"} value={inputSubmit["laboratorio"]} name={"laboratorio"} className="editproductform__text" onChange={onChange}/>
                            <label htmlFor="proveedor" className="editproductform__label">Proveedor</label>
                            <input type="text" id={"proveedor"} value={inputSubmit["proveedor"]} name={"proveedor"} className={"editproductform__text"} onChange={onChange}/>
                            <label htmlFor="pami" className="editproductform__label">Cobertura Pami</label>
                            <div id={"coberturaPami"}>
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
                                <div>
                                    <input type="radio" name="coberturaPami" id={"conpami"} value={12} className="addproductform__radio"
                                           onChange={onChange}/>
                                    <label htmlFor="conpami">Cerrado</label>
                                </div>
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
                    </div>
                </Fade>
            </Modal>
        </>
    );
}