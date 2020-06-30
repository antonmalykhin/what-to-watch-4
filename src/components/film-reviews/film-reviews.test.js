import React from 'react';
import renderer from 'react-test-renderer';
import FilmReviews from './film-reviews';

it(`Should FilmReviews render correctly`, () => {
  const tree = renderer
    .create(
        <FilmReviews />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
