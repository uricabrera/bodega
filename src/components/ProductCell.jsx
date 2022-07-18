import {useState,useContext} from "react";
import HoverText from "./HoverText";
import AnimatedModal from "./AnimatedModal";
import {FaCheck,FaTimes} from "react-icons/fa";
import {FaFileInvoiceDollar} from "react-icons/fa";
import {FaTools} from "react-icons/fa";
import {FaRulerCombined} from "react-icons/fa";
import {FaCommentDollar} from "react-icons/fa";
import {FaDollarSign} from "react-icons/fa";
import {FaCheckDouble} from "react-icons/fa";
import {FaExclamationCircle} from "react-icons/fa";
import {FaPaintBrush} from "react-icons/fa";
import {FaMale} from "react-icons/fa";
import {FaIndustry} from "react-icons/fa";
import {FaTruck} from "react-icons/fa";
import {FaRegWindowClose} from "react-icons/fa";
import {FaCalendarCheck} from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {CartContext} from "../contexts/CartContext";
import { Link } from "react-router-dom";
import {UserContext} from "../contexts/UserContext";
import Icon from '@material-ui/core/Icon';

const ProductCell = ({numero_orden, cliente,detalle,cantidad,precio,proveedor,fecha_orden,fecha_entrega,id,estado,estado_id,delay}) => {

    const [isHovering,setIsHovering] = useState(false);

    const {addProductToCart,cart} = useContext(CartContext);

    const {user} = useContext(UserContext);

    const [show,setShow] = useState(false);

    const [inputQuantity,setInputQuantity] = useState(0);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    const item = cart.find((item) => item.id === id)

    const quantity = item ? item.quantity : null

    function getIcon(platformId) {
        console.log("Llega el id "+platformId)
        switch (platformId) {
            case 1:
            return <FaFileInvoiceDollar className="product_image_status" style={{color:"#e1da13"}}/>
            case 2:
            return <FaTools className="product_image_status" style={{color:"#e1da13"}}/>
            case 3:
            return <FaRulerCombined className="product_image_status" style={{color:"#e1da13"}}/>
            case 4:
            return <FaCheck className="product_image_status" style={{color:"#e1da13"}}/>
            case 5:
            return <FaCommentDollar className="product_image_status" style={{color:"#fb801a"}}/>
            case 6:
            return <FaDollarSign className="product_image_status" style={{color:"#fb801a"}}/>
            case 7:
            return <FaCheckDouble className="product_image_status" style={{color:"#fb801a"}}/>
            case 8:
            return <FaExclamationCircle className="product_image_status" style={{color:"red"}}/>
            case 9:
            return <FaPaintBrush className="product_image_status" style={{color:"#fb801a"}}/>
            case 10:
            return <FaMale className="product_image_status" style={{color:"#74c329"}}/>
            case 11:
            return <FaIndustry className="product_image_status" style={{color:"#74c329"}}/>
            case 12:
            return <FaTruck className="product_image_status" style={{color:"#74c329"}}/>
            case 13:
            return <FaRegWindowClose className="product_image_status"/>
            default:
            return null
            }
        };

    function getColor(delay) {
        if(delay == 0){
        }
        if (delay === ""){
            return "transparent";
        }
        if (delay <= 5) {
            return "#74c329"
        }

        if (delay <= 10 && delay > 5) {
            return "#e1da13";
        }

        if (delay > 10 ){
            return "red";
        } 
        return null
        };

    return(
        <>
            <AnimatedModal show={show} handleClose={() => setShow(false)} 
                cliente={cliente}
                numero_orden={numero_orden}
                proveedor={proveedor}
                fecha_orden={fecha_orden}
                detalle={detalle}
                cantidad={cantidad}
                precio={precio}
            />
            <tr className="product" onClick={() => setShow(true)}>
                <td data-title="Cantidad">{numero_orden}</td>
                {
                <td data-title="Producto" className="product_proveedor">{cliente}
                    
                    {/*
                        user["admin"] === "1" ? (
                            <Link to={`/dashboard/editproduct/${id}`}>
                                <AiFillEdit className="product_image_edit"/>
                            </Link>
                        ) : ""
                    */}
                </td>
            }
                <td data-title="Producto" className="product_laboratorio">{cantidad+" "+detalle}</td>
                <td data-title="proveedor" className="product_proveedor">{proveedor}</td>
                <td data-title="Estado" className="product_proveedor">
                    {estado}
                    {getIcon(estado_id)}
                </td>
                <td data-title="Precio" className="product_proveedor">
                    {fecha_entrega}
                    <FaCalendarCheck className="product_image_status" style={{color:getColor(delay)}}/>
                </td>
            </tr>
        </>
    )
}

export default ProductCell;