import Etiqueta from "./../media/etiqueta.jpg";
import Header from "./Header";
import {Switch,Route} from "react-router-dom";
import Store from "./Store";
import CartCheckout from "./CartCheckout";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Admin from "./Admin";


const Dashboard = () => {


    return(
        <div className="dashboard">
            <Header/>
            <Switch>
                <Route path="/dashboard/store">
                    <Store/>
                </Route>
                <Route path="/dashboard/cartcheckout">
                    <CartCheckout/>
                </Route>
                <Route path="/dashboard/addproduct">
                    <AddProduct/>
                </Route>
                <Route path="/dashboard/editproduct/:id">
                    <EditProduct/>
                </Route>
                <Route path="/dashboard/admin">
                    <Admin/>
                </Route>
            </Switch>
            <div className="dashboard_div">
                <div className="dashboard_text">
                    <p className="dashboard_t">Soluciones de packaging para la industria de</p>
                    <p className="dashboard_wines">WINES&amp;<span style={{fontWeight:"bold"}}>SPIRITS</span></p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;