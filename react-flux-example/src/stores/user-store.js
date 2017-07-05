'use strict';
import {EventEmitter} from "events";

import serviceEndPoints from "./../constants/service-end-points";
import services from "../web-services/web-services";
import ActionTypes from "./../constants/action-types";
import Dispatcher from "./../dispatcher/dispatcher";

let CHANGE_EVENT = 'change';
let LoginStore = Object.assign({}, EventEmitter, {
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
});

Dispatcher.register(function (action) {
    switch (action) {
        case ActionTypes.USER_LOGIN:
            services.get(serviceEndPoints.USER_LOGIN);
            LoginStore.emitChange();
            break;
        case ActionTypes.REGISTER_USER:
            services.post();
            LoginStore.emitChange();
            break;
    }
});
