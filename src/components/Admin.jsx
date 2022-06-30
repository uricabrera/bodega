import AdminTitle from "./AdminTitle";
import AdminBody from "./AdminBody";
import ActivateUsersAdmin from "./ActivateUsersAdmin";
import {Switch,Route} from "react-router-dom";
import DeactivateUsersAdmin from "./DeactivateUsersAdmin";
import ProviderAdmin from "./ProviderAdmin";
import ClientAdmin from "./ClientAdmin";
import ProductsAdmin from "./ProductsAdmin";


const Admin = () => {
    return(
        <section className="admin">
            <AdminTitle/>
            <AdminBody/>
            <Switch>
                <Route path="/dashboard/admin/activateusers">
                    <ActivateUsersAdmin/>
                </Route>
                <Route path="/dashboard/admin/deactivateusers">
                    <DeactivateUsersAdmin/>
                </Route>
                <Route path="/dashboard/admin/providerusers">
                    <ProviderAdmin/>
                </Route>
                <Route path="/dashboard/admin/clientusers">
                    <ClientAdmin/>
                </Route>
                <Route path="/dashboard/admin/products">
                    <ProductsAdmin/>
                </Route>
            </Switch>
        </section>
    )
}

export default Admin;