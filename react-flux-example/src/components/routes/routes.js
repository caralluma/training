import React from "react";
import {browserHistory, Route, Router} from "react-router";

import App from "../app";
import PageNotFound from "../error-page/not-found";
import HomePage from "../home-page/home-page";
import AboutPage from "../about-page/about-page";
import LoginPage from "../login-page/login-page";
import UserRegistrationPage from "../registration-page/registration-page";
import TermsAndConditionsPage from "../registration-page/terms-and-conditions";
import AdminPage from "../admin-page/admin-page";
import TableComponent from "../table/TableComponent";
let Routes = (
    <Router history={browserHistory}>

        <Route name="default" component={App}>
            <Route path="/" component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="register" component={UserRegistrationPage}/>
            <Route path="terms-and-conditions" component={TermsAndConditionsPage}/>
            <Route path="admin" component={AdminPage}/>
            <Route path="products" component={TableComponent}/>
            <Route path="/*" component={PageNotFound}/>
        </Route>

    </Router>
);
export default Routes;
