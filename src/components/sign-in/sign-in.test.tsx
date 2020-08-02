import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import SignIn from './sign-in';


it(`SignIn render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          login={() => { }}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
