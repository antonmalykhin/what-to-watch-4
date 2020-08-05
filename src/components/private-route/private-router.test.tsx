import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import history from '../../history';
import PrivateRouter from './private-route';

it(`PrivateRouter render`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    APP: {
      currentYear: 2020,
      showedFilms: 8,
      isLoading: true
    },
    DATA: {
      activeFilter: `All genres`,
      comments: [],
      favoriteFilms: [],
      films: [],
      filters: [],
      isCommentSend: true,
      promoFilm: {}
    },
    USER: {
      authorizationStatus: `AUTH`,
      user: {}
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <PrivateRouter
            exact
            path={`/login`}
            authorizationStatus={`AUTH`}
            render={() => {
              return <div />;
            }}
          />
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
