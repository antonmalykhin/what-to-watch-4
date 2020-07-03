import films from './mock/films.js';

const InitialState = {
  genre: `All genres`,
  currentFilm: {},
  films
};

export const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  CHANGE_CURRENT_FILM: `CHANGE_CURRENT_FILM`,
  FILTER_FILMS: `FILTER_FILMS`
};

export const ActionCreator = {
  changeGenreFilter: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre
    };
  },

  changeCurrentFilm: (film) => {
    return {
      type: ActionType.CHANGE_CURRENT_FILM,
      payload: film
    };
  },

  getFilteredFilms: (filteredFilms) => {
    return {
      type: ActionType.FILTER_FILMS,
      payload: filteredFilms
    };
  }
};


export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return Object.assign({}, state, {genre: action.payload});
    case ActionType.CHANGE_CURRENT_FILM:
      return Object.assign({}, state, {currentFilm: action.payload});
    case ActionType.FILTER_FILMS:
      return Object.assign({}, state, {films: action.payload});
  }
  return state;
};

