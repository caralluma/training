'use strict';

import React from "react";
import {Link} from "react-router";

import AuthorList from "./authorList";
import AuthorStore from "../../stores/authorStore";

class AuthorPage extends React.Component {
    constructor() {
        super();
        this.state = {authors: AuthorStore.getAllAuthors()};
    }

    /**
     * Commented as the state is set in constructor itself
     */
    /* componentWillMount () {
     // if (this.isMounted()) { // should not be used as deprecated
     this.setState({authors: AuthorStore.getAllAuthors()});
     // }
     }
     */
    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="author" className="btn btn-default">Add User</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

export default AuthorPage;