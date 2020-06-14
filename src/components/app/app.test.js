import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const Film = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014
};

const FILM_TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `No Country for Old Men`
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      title={Film.TITLE}
      genre = {Film.GENRE}
      release={Film.RELEASE}
      filmTitles={FILM_TITLES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
