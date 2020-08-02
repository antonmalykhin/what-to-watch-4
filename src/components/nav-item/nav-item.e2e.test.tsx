import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import NavItem from './nav-item';

configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault() {
    // do nothing
  }
};

it(`Should NavItem button be pressed`, () => {
  const onNavItemButtonClick = jest.fn();

  const nawItem = shallow(
      <NavItem
        title={`Overview`}
        onNavItemClick={onNavItemButtonClick}
        isActive={true}
      />
  );

  const navItemButton = nawItem.find(`.movie-nav__link`);

  navItemButton.simulate(`click`, mockEvent);

  expect(onNavItemButtonClick).toHaveBeenCalledTimes(1);
});
