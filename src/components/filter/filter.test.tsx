import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Filter from './filter';

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
