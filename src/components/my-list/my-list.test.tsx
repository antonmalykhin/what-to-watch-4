import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import MyList from './my-list';
import {noop} from '../../utils';

const favoriteFilms = [
  {
    id: 1,
    isFavorite: true,
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
  }, {
    id: 4,
    isFavorite: true,
    backgroundColor: `#A6B7AC`,
    title: `Pulp Fiction`,
    image: `img/pulp-fiction.jpg`,
    background: `img/bg-pulp-fiction.jpg`,
    genre: `Crime`,
    release: 1994,
    runtime: 197,
    poster: `img/pulp-fiction-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 1.5,
      count: 1635992
    },
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    crew: {
      director: `Quentin Tarantino`,
      starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`]
    }
  }, {
    id: 8,
    isFavorite: true,
    backgroundColor: `#A6B7AC`,
    title: `Once Upon a Time in America`,
    image: `img/once-upon-a-time-in-america.jpg`,
    background: `img/bg-once-upon-a-time-in-america.jpg`,
    genre: `Crime`,
    release: 1984,
    runtime: 294,
    poster: `img/once-upon-a-time-in-america-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 9.9,
      count: 276395
    },
    description: `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
    crew: {
      director: `Sergio Leone`,
      starring: [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`]
    }
  }
];

const user = {
  avatar: `/wtw/static/avatar/6.jpg`,
  email: `asd@asd.ru`,
  id: 1,
  name: `asd`,
};

it(`Should MyList render`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MyList
            currentYear={2020}
            favoriteFilms={favoriteFilms}
            loadComments={noop}
            user={user}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
