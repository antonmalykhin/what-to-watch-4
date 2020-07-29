import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';
import {Router} from 'react-router-dom';
import history from '../../history.js';

it(`Footer render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Footer year={2020}/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
