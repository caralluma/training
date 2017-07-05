'use strict';
import React from "react";
import ProductActions from "./../../actions/product-actions";
import ProductStore from "../../stores/product-store";
import TableComponent from "./../table/TableComponent";
import GithubUsersAction from "./../../actions/github-users-action";
import GithubUsersStore from "./../../stores/github-users-store";
import Constants from "./../../constants/constants";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {tableData: [], error: ""};
        this._refreshData = this._refreshData.bind(this);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._getProductData);
        GithubUsersStore.removeChangeListener(this._getUserData)
    }

    componentWillMount() {
        ProductStore.addChangeListener(this._getProductData);
        GithubUsersStore.addChangeListener(this._getUserData);
    }

    componentDidMount() {
        GithubUsersAction.getAllUsers();
    }

    _getUserData = () => {
        let userData = GithubUsersStore._getUsers();
        this.setState({
            tableData: userData.users,
            error: userData.error
        });
    }

    _getProductData() {
        this.setState({json: JSON.stringify(ProductActions.getAllProducts())});
    }

    _refreshData(event) {
        event.preventDefault();
        GithubUsersStore._deleteData();
        this.setState({
            tableData: [],
            error: Constants.RELOADING
        });
        GithubUsersAction.getAllUsers();
    }

    render() {
        let variant = null, button, error = "";
        if (this.state.error === Constants.DATA_FETCH_IN_PROGRESS) {
            variant = <p>Data Loading.<br/>Please wait....</p>;
            button = <button onClick={this._refreshData}>Refresh Again</button>
        }
        else if (this.state.error === Constants.ERROR_IN_CONNECTION) {
            error = Constants.ERROR_IN_CONNECTION;
            button = <button onClick={this._refreshData}>Retry</button>;
        }
        else if (this.state.error === "") {
            button = <button onClick={this._refreshData}>Refresh</button>;
            variant = <TableComponent headers={Constants.TABLE_HEADERS_GIT} tableData={this.state.tableData}/>;
        }
        return (
            <div>
                <div>
                    <h1>Welcome!</h1>
                    {button} <br />
                    {error}
                    <br />
                </div>
                {variant}
            </div>
        );
    }
}

export default Home;
