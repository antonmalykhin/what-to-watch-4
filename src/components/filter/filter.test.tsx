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
  `Sci-Fi`
];

it(`Should Filter render correctly`, () => {
  const tree = renderer
  .create(
      <Filter
        filterItems={filterItems}
        currentFilter={`All genres`}
        onFilterClick={() => {}}
        resetShowedFilms={() => {}}

      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
