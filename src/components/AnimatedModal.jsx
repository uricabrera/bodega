import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {GrClose} from "react-icons/gr";
import {FaTrash} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
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

export default function AnimatedModal({show,handleClose,cliente,numero_orden,proveedor,fecha_orden,detalle,cantidad,precio}) {
    const classes = useStyles();

    let history = useHistory();

    const [inputSubmit, setInputSubmit] = useState({
        
    })

    const [edit, setEdit] = useState(0);

    let [status_item, setStatusItem] = useState([
    {dd:"1", d:"1", color:"#e1da13",status:"Solicitud de Presupuesto", created:"15/06/2022", entrega:"15/08/2022"},
    {dd:"1", d:"1", color:"#e1da13",status: "Análisis de Factibilidad",created:"18/06/2022", entrega:"15/08/2022"},
    {dd:"1", d:"1", color:"#e1da13",status: "Desarrollo Estructural",created:"18/06/2022", entrega:"15/08/2022"},
    {dd:"1", d:"1", color:"#e1da13",status: "Prototipo Aprobado",created:"18/06/2022", entrega:"15/08/2022"},
    {dd:"1", d:"1", color:"#fb801a",status: "Pedido de Cotización",created:"18/06/2022", entrega:"15/08/2022"},
    {dd:"1", d:"1", color:"white",status: "Cotizado",created:"", entrega:""},
    {dd:"1", d:"1", color:"white",status: "Orden Asignada",created:"", entrega:""},
    {dd:"0", d:"0", color:"red",status: "Orden No Asignada",created:"", entrega:""},
    {dd:"1", d:"1", color:"white",status: "Proceso de Aprobación de Diseño",created:"", entrega:""},
    {dd:"1", d:"1", color:"white",status: "En Producción con pie de Máquina",created:"", entrega:""},
    {dd:"1", d:"1", color:"white",status: "En Producción",created:"", entrega:""},
    {dd:"1", d:"1", color:"white",status: "Entregado",created:"", entrega:""},
    {dd:"1", d:"1", color:"white",status: "Cerrado",created:"", entrega:""}
    ]);

    const original_items = JSON.parse(JSON.stringify(status_item));

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

    function getIconStatus(i,index){
        if(i==0){
            return <FaPlus style={{display:display[edit]}} id={"icon"+index} className="icon_edit" onClick={onChangeItem}/>
        } else {
            return <FaTrash style={{display:display[edit]}} id={"icon"+index} className="icon_edit" onClick={onChangeItem}/>
        }
    }

    const onChangeItem = (e) => {
        let id_order = e.target.parentElement.id;
        if (id_order ===""){
          id_order = e.target.parentElement.id
        }
        id_order = id_order.substring(4);
        let status_item_new = [];
        status_item.forEach(function(i){
            status_item_new.push(i)
        });
        if(status_item_new[id_order].dd==0){
            status_item_new[id_order].dd=1;
        } else{
            status_item_new[id_order].dd=0;
        }        
        
        setStatusItem(status_item_new);

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

    const onEdit = (e) => {
        if (edit == 0){
            setEdit(1);
        } else {
            setEdit(0);
        }
        let status_item_new = [];
        status_item.forEach(function(i){
            status_item_new.push(i)
        });
        status_item_new.forEach(function(i){
            i.d = 1;
        });
        setStatusItem(status_item_new)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEdit(0);
        let status_item_new = [];
        status_item.forEach(function(i){
            status_item_new.push(i)
        });
        status_item_new.forEach(function(i){
            if(i.dd==0){
                i.d = 0;
            }
        });
        setStatusItem(status_item_new);
        console.log(inputSubmit);
        //actualizarItem();
        /*
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
        */
    }

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/dashboard/store");
        setEdit(0);
        console.log("items originales");
        console.log(original_items)
        setStatusItem(original_items);
    }

    
    const display = ["none","inline-block"];
    const display_inverse = ["inline-block","none"];
    const backcolor=["rgb(220,220,220)","white"];
    const border_input=["none","solid 1px"];
    const status_items = status_item.map((item,index) =>
        <div style={{backgroundColor:backcolor[item.dd]}}>
            <div className="div_status" style={{display:display[item.d]}}>
                <div className="radio_status" style={{backgroundColor:item.color}}></div>
                <input style={{border:border_input[edit]}} className = "label_status pp_status_date" value={item.created} />
                <label className = "label_status pp_status">{item.status}</label>
                <label className = "label_status">Entrega estimada:{item.entrega}</label> 
                {getIconStatus(item.dd, index)}                                      
            </div>
        </div>
        )
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={show}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={show}>
                    <div className="paper" >
                        <GrClose className="modal_image_close" onClick={handleClose}/>
                        <div className="half_paper_left">
                            <h2>Número de orden: {numero_orden}</h2>
                            <p>Cliente: {cliente}</p>
                            <p>Proveedor: {proveedor}</p>
                            <p>Fecha colocación orden: {fecha_orden}</p>
                            <p>Descripción:</p>
                            <p className="pp_detalle">Cantidad: {cantidad}</p>
                            <p className="pp_detalle">Detalle: {detalle}</p>
                            <p className="pp_detalle">Precio: {precio}</p>
                            <p className="pp_detalle">Total: $ {(cantidad * precio).toLocaleString()}</p>
                            <p className="pp_detalle">Número de Plano: {detalle}</p>
                            <p className="pp_detalle">Plano: {detalle}</p>
                            <p className="pp_detalle">Aprobación de diseño: {detalle}</p>
                            <p className="pp_detalle">Pie de Máquina: {detalle}</p>
                            <p className="pp_detalle">Observaciones: {detalle}</p>
                        </div>
                        <div className="half_paper_right">
                            <div>
                                {status_items}
                            </div>
                            <div>
                                <button style={{display: display_inverse[edit], float: "right"}} className="editproductform__submit searchbar_form_submit" onClick={onEdit}>Cambiar Estado</button>
                            </div>
                            <div style={{display:display[edit]}}>
                                <button className="searchbar_form_submit editproductform__cancel" onClick={onCancel}>Cancelar</button>
                                <input type="submit" value={"Confirmar"} className="editproductform__submit searchbar_form_submit" onClick={onSubmit}/>
                            </div>
                        </div>
                            
                    </div>
                </Fade>
            </Modal>
        </>
    );
}