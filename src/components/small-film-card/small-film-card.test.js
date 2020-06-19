import React from 'react';
import renderer from 'react-test-renderer';
import SmallFilmCard from './small-film-card.jsx';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

const filmTitleClickHandler = () => {};
const filmMouseOverHandler = () => {};

it(`Should SmallFilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <SmallFilmCard
          film={film}
          onFilmTitleClick={filmTitleClickHandler}
          onFilmMouseOver={filmMouseOverHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
