import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Orders from "./Orders/Orders";

function Routes(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;