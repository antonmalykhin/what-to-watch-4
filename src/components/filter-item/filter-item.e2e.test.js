import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterItem from './filter-item';

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {}
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
