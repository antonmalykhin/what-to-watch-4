import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import {reducer, OperationGetFilms, OperationGetPromoFilm} from './reducer.js';
import {createAPI} from './api.js';

const api = createAPI();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(OperationGetFilms.loadFilms());
store.dispatch(OperationGetPromoFilm.loadPromoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
