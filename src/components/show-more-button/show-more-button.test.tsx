import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button';
import {noop} from '../../utils';

it(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onButtonClick={noop}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
