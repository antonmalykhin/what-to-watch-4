import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';


it(`Header render`, () => {
  const tree = renderer.create(
      <Header classNameModifier={`user-page`}>
        <div />
      </Header>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
