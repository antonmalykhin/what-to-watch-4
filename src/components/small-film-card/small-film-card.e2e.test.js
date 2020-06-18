import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallFilmCard from './small-film-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Film data passed to callback`, () => {
  const onCardMouseOver = jest.fn();

  const smallFilmCard = shallow(
      <SmallFilmCard
        film={film}
        onFilmTitleClick={() => { }}
        onFilmMouseOver={onCardMouseOver}
      />
  );

  const filmCard = smallFilmCard.find(`.small-movie-card`);
  filmCard.props().onMouseOver();

  expect(onCardMouseOver).toHaveBeenCalledTimes(1);
  expect(onCardMouseOver.mock.calls[0][0]).toMatchObject(film);
});

it(`Should film title link be pressed`, () => {
  const onTitleClick = jest.fn();

  const smallFilmCard = shallow(
      <SmallFilmCard
        film={film}
        onFilmTitleClick={onTitleClick}
        onFilmMouseOver={() => {}}
      />
  );

  const filmTitle = smallFilmCard.find(`.small-movie-card__link`);
  filmTitle.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
