import {Route, Switch} from "react-router-dom"

// pages
import Main from "./pages/Main/Main"
import CatalogProducts from "./pages/CatalogProducts/CatalogProducts"
import Calculator from "./pages/Calculator/Calculator"

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/catalog" component={CatalogProducts}/>
        <Route path="/calculator" component={Calculator}/>
    </Switch>
)