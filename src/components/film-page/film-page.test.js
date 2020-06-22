import React from 'react';
import renderer from 'react-test-renderer';
import FilmPage from './film-page.jsx';

const films = [
  {
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
  }, {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`,
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
  }, {
    title: `Macbeth`,
    image: `img/macbeth.jpg`,
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
  }, {
    title: `Aviator`,
    image: `img/aviator.jpg`,
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
  }, {
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
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
  }, {
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`,
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
  }, {
    title: `Revenant`,
    image: `img/revenant.jpg`,
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
  }, {
    title: `Johnny English`,
    image: `img/johnny-english.jpg`,
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
  }
];

const film = films[0];

it(`Should FilmPage render correctly`, () => {
  const tree = renderer
    .create(
        <FilmPage
          film={film}
          films={films}
          onFilmClick={() => { }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});