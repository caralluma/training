'use strict';
import Dispatcher from "../dispatcher/dispatcher";
import logger from "react-logger";

import constants from "./../constants/service-end-points";
import ActionTypes from "../constants/action-types";
import services from "./../web-services/web-services";

let AuthorActions = {
    createAuthor(author) {
        //Dispatches an event to all stores that a new createAuthor is triggered
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: author
        });
    },
    getAllAuthors(){
        Dispatcher.dispatch({
            actionType: ActionTypes.GET_AUTHORS
        });
    },
    testConnection(){
        let call = services.getUsingAxios(constants.TEST, this.callbackFunction.bind(this));
        Dispatcher.dispatch({
            actionType: ActionTypes.TEST,
            data: call
        });

    }, callbackFunction(data){
        let response = JSON.stringify(data.data);
        logger.debug(data);
        logger.debug(response);
        return response;
    }
};

export default AuthorActions;
