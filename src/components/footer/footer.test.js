import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

it(`Footer render correctly`, () => {
  const tree = renderer.create(
      <Footer year={2020}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
