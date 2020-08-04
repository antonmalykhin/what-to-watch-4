import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import FilterItem from './filter-item';

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {
    // do nothing
  }
};

it(`Should FilterItem button be pressed`, () => {
  const onFilterItemButtonClick = jest.fn();

  const filterItem = shallow(
      <FilterItem
        filterTitle={`All genres`}
        onFilterItemClick={onFilterItemButtonClick}
        isActive={true}
      />
  );

  const filterItemButton = filterItem.find(`.catalog__genres-link`);

  filterItemButton.simulate(`click`, mockEvent);
  expect(onFilterItemButtonClick).toHaveBeenCalledTimes(1);
});
