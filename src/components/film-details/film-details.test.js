import React from 'react';
import renderer from 'react-test-renderer';
import FilmDetails from './film-details.jsx';

const film = {
  genre: `Drama`,
  release: 2014,
  runtime: 99,
  crew: {
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe, Saoirse Ronan, Tony Revoloru, Tilda Swinton, Tom Wilkinson, Owen Wilkinson, Adrien Brody, Ralph Fiennes, Jeff Goldblum`
  }
};

it(`Should FilmDetails render correctly`, () => {
  const tree = renderer
    .create(
        <FilmDetails
          genre={film.genre}
          release={film.release}
          runtime={film.runtime}
          crew={film.crew}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
