import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const filmPreviewSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  LOOP: true,
  SRC: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  POSTER: `img/the-grand-budapest-hotel-poster.jpg`,
  IS_PLAYING: false
};

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          width={filmPreviewSettings.WIDTH}
          height={filmPreviewSettings.HEIGHT}
          src={filmPreviewSettings.SRC}
          poster={filmPreviewSettings.POSTER}
          loop={filmPreviewSettings.LOOP}
          isPlaying={filmPreviewSettings.IS_PLAYING}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
