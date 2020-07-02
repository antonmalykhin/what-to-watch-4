import React from 'react';
import renderer from 'react-test-renderer';
import FilterItem from './filter-item.jsx';

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
