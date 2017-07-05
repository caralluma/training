'use strict';
import React from "react";
import Header from "./common-components/header";
import PropTypes from "prop-types";

class App extends React.Component {
    constructor() {
        super();
        this.state = {username: '', token: ''};
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.any.isRequired
};

export default App;