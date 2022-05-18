import Header from "./Header";
import {Switch,Route} from "react-router-dom";
import Store from "./Store";
import CartCheckout from "./CartCheckout";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";


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
            </Switch>
        </div>
    )
}

export default Dashboard;