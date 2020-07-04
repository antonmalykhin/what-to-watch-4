import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-button.jsx';

Enzyme.configure({
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
