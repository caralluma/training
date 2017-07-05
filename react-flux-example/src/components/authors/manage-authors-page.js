import React from "react";
import toastr from "toastr";
import {browserHistory} from "react-router";
import PropTypes from "prop-types";

import AuthorActions from "../../actions/author-actions";
import AuthorStore from "../../stores/authorStore";
import AuthorForm from "./authorForm";

class ManageAuthor extends React.Component {
    constructor() {
        super();
        this.state = {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
        toastr.option = {
            'closeButton': false,
            'debug': false,
            'newestOnTop': false,
            'progressBar': false,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '200',
            'hideDuration': '200',
            'timeOut': '500',
            'extendedTimeOut': '100',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    }

    componentWillMount() {
        let authorId = this.props.params.id;
        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    }

    setAuthorState(event) {
        let field = event.target.name,
            value = event.target.value, newAuthorInState = this.state.author;
        newAuthorInState[field] = value;
        newAuthorInState.id = newAuthorInState.firstName + '-' + newAuthorInState.lastName;
        return this.setState({author: newAuthorInState});
    }

    saveAuthor(event) {
        event.preventDefault();
        AuthorActions.createAuthor(this.state.author);
        toastr['success']('User ' + this.state.author.firstName + ' saved');
        browserHistory.push('/authors');
    }

    render() {
        return (
            <AuthorForm author={this.state.author}
                        onTextChange={this.setAuthorState.bind(this)}
                        onClick={this.saveAuthor.bind(this)}/>
        );
    }
}
ManageAuthor.propTypes = {
    params: PropTypes.any
};

export default ManageAuthor;