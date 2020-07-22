import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import {Operation} from './reducer/data/data.js';
import {Operation as appOperation} from './reducer/app/app.js';
import {createAPI} from './api.js';

const api = createAPI();

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(Operation.loadFilms());
store.dispatch(Operation.loadPromoFilm());
store.dispatch(appOperation.getCurrentYear());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
