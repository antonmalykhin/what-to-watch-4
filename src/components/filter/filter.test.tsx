import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Filter from './filter';
import {noop} from '../../utils';


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
        onFilterClick={noop}
        resetShowedFilms={noop}

      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
