import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import FilmPage from './film-page';
import {noop} from '../../utils';

const films = [
  {
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
  }, {
    id: 2,
    isFavorite: false,
    backgroundColor: `#A6B7AC`,
    title: `Gangs of new york`,
    image: `img/gangs-of-new-york.jpg`,
    background: `img/bg-gangs-of-new-york.jpg`,
    genre: `Crime`,
    release: 2002,
    runtime: 134,
    poster: `img/gangs-of-new-york-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 8.8,
      count: 124123
    },
    description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
    crew: {
      director: `Martin Scorsese`,
      starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`]
    }
  }, {
    id: 3,
    isFavorite: true,
    backgroundColor: `#A6B7AC`,
    title: `Moonrise Kingdom`,
    image: `img/moonrise-kingdom.jpg`,
    background: `img/bg-moonrise-kingdom.jpg`,
    genre: `Adventure`,
    release: 2012,
    runtime: 106,
    poster: `img/moonrise-kingdom-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 7.9,
      count: 291183
    },
    description: `A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.`,
    crew: {
      director: `Wes Anderson`,
      starring: [`Jared Gilman`, `Kara Hayward`, `Bruce Willis`]
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
    id: 5,
    isFavorite: false,
    backgroundColor: `#A6B7AC`,
    title: `Bronson`,
    image: `img/bronson.jpg`,
    background: `img/bg-bronson.jpg`,
    genre: `Action`,
    release: 2008,
    runtime: 186,
    poster: `img/bronson-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 3.6,
      count: 109661
    },
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    crew: {
      director: `Nicolas Winding Refn`,
      starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`]
    }
  }, {
    id: 6,
    isFavorite: false,
    backgroundColor: `#A6B7AC`,
    title: `Midnight Special`,
    image: `img/midnight-special.jpg`,
    background: `img/bg-midnight-special.jpg`,
    genre: `Action`,
    release: 2016,
    runtime: 134,
    poster: `img/midnight-special-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 3.3,
      count: 67815
    },
    description: `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`,
    crew: {
      director: `Jeff Nichols`,
      starring: [`Michael Shannon`, `Joel Edgerton`, `Kirsten Dunst`]
    }
  }, {
    id: 7,
    isFavorite: false,
    backgroundColor: `#A6B7AC`,
    title: `Matrix`,
    image: `img/matrix.jpg`,
    background: `img/bg-matrix.jpg`,
    genre: `Action`,
    release: 1999,
    runtime: 194,
    poster: `img/matrix-poster.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    video: `https://upload.wikimedia.org/wikipedia/commons/4/41/Big_Buck_Bunny_medium.ogv`,
    rating: {
      score: 4.4,
      count: 1503092
    },
    description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
    crew: {
      director: `Wachowski Brothers`,
      starring: [`Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`]
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

const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }, {
    id: 2,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const match = {
  params: {
    id: `1`
  }
};

it(`Should FilmPage render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FilmPage
            authorizationStatus={`AUTH`}
            currentYear={2020}
            films={films}
            favoriteFilms={favoriteFilms}
            addFilmToFavorites={noop}
            comments={comments}
            loadComments={noop}
            match={match}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
