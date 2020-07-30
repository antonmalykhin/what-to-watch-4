import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';
import {Router} from 'react-router-dom';
import history from '../../history.js';


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
