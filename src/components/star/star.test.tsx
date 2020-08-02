import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Star from './star';

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
