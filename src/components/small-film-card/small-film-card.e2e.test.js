import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallFilmCard from './small-film-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  release: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: {
    score: 8.9,
    level: `Very good`,
    count: 240
  },
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  crew: {
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
  }
};

const mockEvent = {
  preventDefault() {}
};

it(`Film data passed to callback`, () => {
  const onCardMouseOver = jest.fn();

  const smallFilmCard = shallow(
      <SmallFilmCard
        film={film}
        onFilmClick={() => { }}
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
        onFilmClick={onTitleClick}
        onFilmMouseOver={() => {}}
      />
  );

  const filmTitle = smallFilmCard.find(`.small-movie-card__link`);
  filmTitle.simulate(`click`, mockEvent);

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
