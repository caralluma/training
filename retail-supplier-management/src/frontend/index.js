import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';


const rootEl = document.getElementById('app');
const store = configureStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./containers/App', render);
}

render();
