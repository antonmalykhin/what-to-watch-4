import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Star from './star';
import {noop} from '../../utils';

it(`Star render correctly`, () => {
  const tree = renderer.create(
      <Star
        ratingValue={1}
        onRatingCheck={noop}
        isChecked={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
