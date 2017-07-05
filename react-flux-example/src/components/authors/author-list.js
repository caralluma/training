'use strict';
import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";

class AuthorList extends React.Component {
    render() {
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><Link to={'author/' + author.id}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        let result;
        if (this.props.authors && this.props.authors instanceof Array &&
            this.props.authors.length > 0) {
            result = <table className="table table-striped table-responsive">
                <thead>
                <td>Id</td>
                <td>Name</td>
                </thead>
                <tbody>
                {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>;
        }
        else {
            result = <p>No authors found. Please add using the above button</p>;
        }
        return (
            <div>
                {result}
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};
export default AuthorList;