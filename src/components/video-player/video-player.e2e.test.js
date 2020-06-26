import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

Enzyme.configure({
  adapter: new Adapter()
});

const filmPreviewSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  MUTED: true,
  LOOP: true,
  SRC: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  POSTER: `img/the-grand-budapest-hotel-poster.jpg`,
};

it(`Should video play`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        width={filmPreviewSettings.WIDTH}
        height={filmPreviewSettings.HEIGHT}
        src={filmPreviewSettings.SRC}
        poster={filmPreviewSettings.POSTER}
        muted={filmPreviewSettings.MUTED}
        loop={filmPreviewSettings.LOOP}
        isPlaying={true}
      />
  );

  expect(videoPlayer.props().isPlaying).toBe(true);

  videoPlayer.unmount();
});

it(`Should video pause`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        width={filmPreviewSettings.WIDTH}
        height={filmPreviewSettings.HEIGHT}
        src={filmPreviewSettings.SRC}
        poster={filmPreviewSettings.POSTER}
        muted={filmPreviewSettings.MUTED}
        loop={filmPreviewSettings.LOOP}
        isPlaying={false}
      />
  );

  expect(videoPlayer.props().isPlaying).toBe(false);

  videoPlayer.unmount();
});
