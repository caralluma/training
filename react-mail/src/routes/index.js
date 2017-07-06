import React from "react";
import {browserHistory, Route, Router} from "react-router";

import Home from "../components/home";
import Inbox from "../components/inbox/index";
import Sent from "../components/sent/index";
import Trash from "../components/trash";

let Routes = (
    <Router history={browserHistory}>

        <Route name="default" component={Home}>
            <Route path="/" component={Inbox}/>
            <Route path="sent" component={Sent}/>
            <Route path="trash" component={Trash}/>
            {/*
             <Route path="/*" component={PageNotFound}/>
             */}
        </Route>

    </Router>
);
export default Routes;
