import AdminTitle from "./AdminTitle";
import AdminBody from "./AdminBody";
import ActivateUsersAdmin from "./ActivateUsersAdmin";
import {Switch,Route} from "react-router-dom";
import DeactivateUsersAdmin from "./DeactivateUsersAdmin";


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

                </Route>
            </Switch>
        </section>
    )
}

export default Admin;