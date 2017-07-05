'use strict';
import Dispatcher from "../dispatcher/dispatcher";
import ActionTypes from "../constants/action-types";

let LoginActions = {
    loginUser(user){
        Dispatcher.dispatch({
            actionType: ActionTypes.USER_LOGIN,
            user: user
        });
    }
};
export default LoginActions;