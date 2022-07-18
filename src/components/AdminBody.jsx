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
                        Usuarios
                    </h3>
                    <AiOutlineUserAdd className="admin__body__section__logo"/>
                </div>
            </Link>
            <Link to={"/dashboard/admin/providerusers"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <div className="admin__body__section">
                    <h3 className="admin__body__section__title">
                        Roles
                    </h3>
                        <MdAddBusiness className="admin__body__section__logo"/>
                </div>
            </Link>
        </div>
    )
}

export default AdminBody;