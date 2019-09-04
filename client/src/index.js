//importing React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//importing react-redux Provider
import {Provider} from 'react-redux';

//importing redux createStore, applyMiddleware and compose functionalities
import {createStore, applyMiddleware,compose} from 'redux';

//importing reduxThunk middleware
import reduxThunk from 'redux-thunk';

//importing local components
import App from './components/App';
import reducers from './reducers';

//Setting up redux devtools to inspect and debug redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creating a redux store, passing in the reducers and composeEnhancer
//Also applying Redux Thunk middleware to the sroe
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

//wrapping the app component with the Provider, passing in the redux store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
);

