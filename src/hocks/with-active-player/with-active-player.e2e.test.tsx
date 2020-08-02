import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withActivePlayer from './with-active-player';
import {noop} from '../../utils';
configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withActivePlayer(MockComponent);

it(`Should playing`, () => {
  jest.useFakeTimers();

  const wrapper = shallow(
      <MockComponentWrapped
        film={{}}
        onFilmMouseOver={noop}
      />
  );

  expect(wrapper.props().isPlaying).toEqual(false);
  wrapper.props().onPlayVideo();
  jest.advanceTimersByTime(1000);
  expect(wrapper.props().isPlaying).toEqual(true);
  wrapper.props().onStopVideo();
  expect(wrapper.props().isPlaying).toEqual(false);
});
