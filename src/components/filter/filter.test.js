import React from 'react';
import renderer from 'react-test-renderer';
import Filter from './filter.jsx';
const filterItems = [
  `All genres`,
  `Comedy`,
  `Crime`,
  `Documentary`,
  `Drama`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`];

const State = {
  activeFilter: `All genres`
};

it(`Should Filter render correctly`, () => {
  const tree = renderer
  .create(
      <Filter
        filterItems={filterItems}
        state={State}
        onFilterItemClick={() => {}} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
