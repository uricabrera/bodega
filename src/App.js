import Login from "./components/Login"
import Register from "./components/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Recover from "./components/Recover";
import RegisterConfirm from "./components/RegisterConfirm";
import RegisterActivation from "./components/RegisterActivation";
import ClientCode from "./components/ClientCode";
import {CounterProvider} from "./contexts/CounterContext";
import {CartProvider} from "./contexts/CartContext";
import {PaginationProvider} from "./contexts/PaginationContext";
import {UserProvider} from "./contexts/UserContext";
import {ToastContainer,Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <UserProvider>
          <CounterProvider>
              <CartProvider>
                  <PaginationProvider>
                      <div className="App">
                          <>
                              <ToastContainer transition={Zoom}/>
                          </>
                          <BrowserRouter basename="/sistema/">
                              <Switch>
                                  <Route exact path="/">
                                      <Login/>
                                  </Route>
                                  <Route exact path="/register">
                                      <Register/>
                                  </Route>
                                  <Route exact path="/registercode">
                                      <ClientCode/>
                                  </Route>
                                  <Route exact path="/register/confirm">
                                      <RegisterConfirm/>
                                  </Route>
                                  <Route exact path="/register/activate/">
                                      <RegisterActivation/>
                                  </Route>
                                  <Route path="/dashboard">
                                      <Dashboard/>
                                  </Route>
                                  <Route path="/recover">
                                      <Recover/>
                                  </Route>
                              </Switch>
                          </BrowserRouter>
                      </div>
                  </PaginationProvider>
              </CartProvider>
          </CounterProvider>
      </UserProvider>
  );
}

export default App;
