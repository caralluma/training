'use strict';
import {EventEmitter} from "events";

import AppDispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action-types";
import Constants from "../constants/constants";

let CHANGE_EVENT = 'change';
let _userData = {
    user: [],
    error: Constants.DATA_FETCH_IN_PROGRESS
};

let GitHubUserStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    }, _getUsers() {
        return _userData;
    }, _deleteData(){
        _userData = {
            user: [],
            error: Constants.DATA_FETCH_IN_PROGRESS
        };
    }
});

AppDispatcher.register(function (action) {
    let error, _users;
    switch (action.actionType) {
        case ActionTypes.GET_GITHUB_USERS:
            if (!action.error) {
                _users = action.data;
                error = "";
            }
            else {
                _users = [];
                error = Constants.ERROR_IN_CONNECTION;
            }
            _userData = {users: _users, error: error};
            GitHubUserStore.emitChange();
            break;
    }
});

export default GitHubUserStore;

