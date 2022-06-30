import {AiOutlineUserAdd,AiOutlineUserDelete} from "react-icons/ai";
import {MdAddBusiness} from "react-icons/md";
import {FaHouseUser,FaProductHunt} from "react-icons/fa";
import {Link} from "react-router-dom";

const AdminBody = () => {
    return(
        <div className="admin__body">
            <Link to={"/dashboard/admin/activateusers"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="admin__body__section">
                    <h3 className="admin__body__section__title">
                        Activar Usuarios
                    </h3>
                    <div className="admin__body__section__svg">
                        <AiOutlineUserAdd/>
                    </div>
                </div>
            </Link>
            <Link to={"/dashboard/admin/deactivateusers"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="admin__body__section">
                    <h3 className="admin__body__section__title">
                        Desactivar Usuarios
                    </h3>
                    <div className="admin__body__section__svg">
                        <AiOutlineUserDelete/>
                    </div>
                </div>
            </Link>
            <Link to={"/dashboard/admin/providerusers"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="admin__body__section">
                    <h3 className="admin__body__section__title">
                        Añadir/Quitar Rol Proveedor
                    </h3>
                    <div className="admin__body__section__svg">
                        <MdAddBusiness/>
                    </div>
                </div>
            </Link>
            <Link to={"/dashboard/admin/clientusers"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="admin__body__section">
                    <h3 className="admin__body__section__title">
                        Añadir/Quitar Rol Cliente
                    </h3>
                    <div className="admin__body__section__svg">
                        <FaHouseUser/>
                    </div>
                </div>
            </Link>
            <Link to={"/dashboard/admin/products"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="admin__body__section">
                    <h3 className="admin__body__section__title">
                        Añadir/Editar/Quitar Producto
                    </h3>
                    <div className="admin__body__section__svg">
                        <FaProductHunt/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default AdminBody;