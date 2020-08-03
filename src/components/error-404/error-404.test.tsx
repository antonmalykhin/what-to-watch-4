import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import Error404 from './error-404';

it(`Error page render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Error404 />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
