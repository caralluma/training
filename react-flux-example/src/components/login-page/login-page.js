'use strict';
import React from "react";
import toastr from "toastr";
import {browserHistory} from "react-router";
import InputTextField from "../common-components/input-field";

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            error: {
                userName: '',
                password: ''
            }
        };
    }

    validateUserName(event) {
        let value, errorMessage = this.state.error;
        if (event === null || event === undefined)
            value = this.state.userName;
        else
            value = event.target.value;

        if (value.length < 4) {
            errorMessage.userName = 'User Name should be at least 4 characters';
            this.setState({error: errorMessage, password: value});
            return false;
        }
        errorMessage.userName = '';
        this.setState({error: errorMessage, userName: value});
        return true;
    }

    validatePassword(event) {
        let value, response = true, errorMessage = this.state.error;
        if (event === null || event === undefined)
            value = this.state.password;
        else
            value = event.target.value;

        if (this.state.password.length < 4) {
            errorMessage.password = 'Password should be at least 4 characters';
            this.setState({error: errorMessage});
            response = false;
        }
        if (response) {
            errorMessage.password = '';
            this.setState({error: this.state.error, password: value});
        }
        return response;
    }

    login(event) {
        event.preventDefault();
        if (!this.validateUserName()) return;
        if (!this.validatePassword()) return;
        toastr['success']('Welcome ' + this.state.userName);
        browserHistory.push('/authors');
    }

    render() {
        return (
            <form className="form-group">
                <InputTextField fieldType="text" fieldName="userName"
                                placeholder="User Name"
                                onTextChange={this.validateUserName.bind(this)}
                                isFieldRequired={true}
                                error={this.state.error.userName}/>
                <InputTextField fieldType="password" fieldName="password"
                                placeholder="Password"
                                onTextChange={this.validatePassword.bind(this)}
                                isFieldRequired={true}
                                error={this.state.error.password}/>
                <button className="btn btn-primary" onClick={this.login.bind(this)}>
                    Submit
                </button>
            </form>
        );
    }
}

export default LoginPage;
