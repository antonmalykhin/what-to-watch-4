import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSetRating from './with-set-rating.js';

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withSetRating(MockComponent);

it(`HOC works`, () => {

  const wrapper = shallow(
      <MockComponentWrapped
        filmID={13}
        onSubmit={() => {}}
      />
  );
  expect(wrapper.props().rating).toEqual(3);
  wrapper.props().onRatingCheck(5);
  expect(wrapper.props().rating).toEqual(5);
});
