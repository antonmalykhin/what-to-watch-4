import React from 'react';
import renderer from 'react-test-renderer';
import LoadingMessage from './loading-message.jsx';

it(`LoadingMessage render`, () => {
  const tree = renderer.create(
      <LoadingMessage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
