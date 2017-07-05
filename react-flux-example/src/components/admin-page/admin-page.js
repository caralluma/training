'use strict';
import React from "react";
import {Link} from "react-router";

class AdminPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="manageProducts"> Manage Products
                    <
                    /Link>
                    <Link to="manageOrder"> Manage Orders
                        <
                        /Link>
            </div>
    );
    }
    }

    export default AdminPage;
