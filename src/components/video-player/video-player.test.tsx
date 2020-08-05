import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const filmPreviewSettings = {
  SRC: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  POSTER: `img/the-grand-budapest-hotel-poster.jpg`,
  IS_PLAYING: false
};

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          src={filmPreviewSettings.SRC}
          poster={filmPreviewSettings.POSTER}
          isPlaying={filmPreviewSettings.IS_PLAYING}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
