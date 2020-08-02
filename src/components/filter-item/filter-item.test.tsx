import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FilterItem from './filter-item';
import {noop} from '../../utils';

it(`Should FilterItem render correctly`, () => {
  const tree = renderer
    .create(
        <FilterItem
          filterTitle={`All genres`}
          onFilterItemClick={noop}
          isActive={true}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
