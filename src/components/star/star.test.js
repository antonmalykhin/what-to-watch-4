import React from 'react';
import renderer from 'react-test-renderer';
import Star from './star.jsx';

it(`Star render correctly`, () => {
  const tree = renderer.create(
      <Star
        ratingValue={1}
        onRatingCheck={() => {}}
        isChecked={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
