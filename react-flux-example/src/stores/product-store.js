'use strict';
import {EventEmitter} from "events";

let CHANGE_EVENT = 'change';
let _products = {};
let ProductStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },
    emitChange() {
        this.emitChange(CHANGE_EVENT);
    },
    getProductData() {
        return _products;
    }
});

export default ProductStore;
