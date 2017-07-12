import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const rootElement = document.getElementById('app');
const rootContainer = () => {
    return (
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
    );
};

const render = () => {
    ReactDOM.render(
        rootContainer(),
        rootElement
    );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./containers/App', render);
}

render();
