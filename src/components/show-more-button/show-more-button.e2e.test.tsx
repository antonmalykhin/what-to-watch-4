import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-button';

configure({
  adapter: new Adapter()
});

it(`Should ShowMoreButton button be pressed`, () => {
  const onShowMoreButtonClick = jest.fn();

  const showMoreButton = shallow(
      <ShowMoreButton
        onButtonClick={onShowMoreButtonClick}
      />
  );

  const btn = showMoreButton.find(`.catalog__button`);

  btn.simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
