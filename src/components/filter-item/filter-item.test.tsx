import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FilterItem from './filter-item';

it(`Should FilterItem render correctly`, () => {
  const tree = renderer
    .create(
        <FilterItem
          filterTitle={`All genres`}
          onFilterItemClick={() => { }}
          isActive={true}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
