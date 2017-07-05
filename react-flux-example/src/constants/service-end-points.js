'use strict';
import constants from "./config";
let url = constants.server.url + ':' + constants.server.port;
export default {
    USER_LOGIN: url + '/user/login-page',
    USER_REGISTER: url + '/user/registration-page',
    TEST: url,
    PRODUCTS: url + '/resources/products',
    GITHUB_USERS: 'https://api.github.com/users?since='
};
