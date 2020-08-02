import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import Footer from './footer';

it(`Footer render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Footer year={2020}/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
