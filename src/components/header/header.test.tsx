import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import Header from './header';



it(`Header render`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Header classNameModifier={`user-page`}>
          <div />
        </Header>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
