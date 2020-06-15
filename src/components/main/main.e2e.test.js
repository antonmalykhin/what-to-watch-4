import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film title link be pressed`, () => {
  const onTitleButtonClick = jest.fn();

  const mainPage = shallow(
      <Main
        title={Film.TITLE}
        genre={Film.GENRE}
        release={Film.RELEASE}
        filmTitles={FILM_TITLES}
        onFilmTitleClick={onTitleButtonClick}
      />
  );

  const filmTitles = mainPage.find(`.small-movie-card__link`);

  filmTitles.forEach((filmTitle) => filmTitle.simulate(`click`));

  expect(onTitleButtonClick).toHaveBeenCalledTimes(filmTitles.length);
});
