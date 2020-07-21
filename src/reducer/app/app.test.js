import {reducer, ActionCreator, ActionType} from './app.js';

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

describe(`Reducer changes the state correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    });
  });

  it(`Reducer change genre by given value`, () => {
    expect(reducer({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    }, {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Comedy`
    })).toEqual({
      genre: `Comedy`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    });
  });

  it(`Reducer change showedFilms by given value`, () => {
    expect(reducer({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    }, {
      type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
      payload: 8
    })).toEqual({
      genre: `All genres`,
      showedFilms: 16,
      currentFilm: {},
      playingFilm: {},
    });
  });

  it(`Reducer reset showedFilms`, () => {
    expect(reducer({
      genre: `All genres`,
      showedFilms: 24,
      currentFilm: {},
      playingFilm: {},
    }, {
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: 8
    })).toEqual({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    });
  });

  it(`Reducer change currentFilm by given value`, () => {
    expect(reducer({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    }, {
      type: ActionType.CHANGE_CURRENT_FILM,
      payload: film
    })).toEqual({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {
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
      },
      playingFilm: {},
    });
  });

  it(`Reducer change playingFilm by given value`, () => {
    expect(reducer({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    }, {
      type: ActionType.OPEN_MAIN_PLAYER,
      payload: film
    })).toEqual({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {
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
      },
    });
  });

  it(`Reducer reset playingFilm by the closure`, () => {
    expect(reducer({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {
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
      }
    }, {
      type: ActionType.CLOSE_MAIN_PLAYER,
      payload: {}
    })).toEqual({
      genre: `All genres`,
      showedFilms: 8,
      currentFilm: {},
      playingFilm: {},
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenreFilter(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: `Comedy`
    });
  });

  it(`Action creator for increment showed films count returns correct action`, () => {
    expect(ActionCreator.incrementShowedFilmCount()).toEqual({
      type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
      payload: 8
    });
  });

  it(`Action creator for reset showed films count returns correct action`, () => {
    expect(ActionCreator.incrementShowedFilmCount()).toEqual({
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: 8
    });
  });

  it(`Action creator change current film returns correct action`, () => {
    expect(ActionCreator.changeCurrentFilm(film)).toEqual({
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: {
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
      }
    });
  });

  it(`Action creator for open main player returns correct action`, () => {
    expect(ActionCreator.openMainPlayer(film)).toEqual({
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: {
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
      }
    });
  });

  it(`Action creator for closing main play returns correct action`, () => {
    expect(ActionCreator.closeMainPlayer()).toEqual({
      type: ActionType.CLOSE_MAIN_PLAYER,
      payload: {}
    });
  });
});
