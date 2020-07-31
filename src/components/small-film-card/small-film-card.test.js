import React from 'react';
import renderer from 'react-test-renderer';
import SmallFilmCard from './small-film-card.jsx';

const film = {
  id: 1,
  isFavorite: false,
  backgroundColor: `#A6B7AC`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  release: 2014,
  runtime: 99,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
  rating: {
    score: 8.9,
    count: 240
  },
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  crew: {
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`]
  }
};

it(`Should SmallFilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <SmallFilmCard
          film={film}
          onFilmMouseOver={() => {}}
          onPlayVideo={() => {}}
          onStopVideo={() => {}}
          isPlaying={false}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
