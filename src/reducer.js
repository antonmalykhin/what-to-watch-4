import films from './mock/films.js';
import {extend} from './utils.js';

const FILM_COUNT_ON_START = 8;
const INCREMENT_FILM_COUNT = 8;
const InitialState = {
  genre: `All genres`,
  showedFilms: FILM_COUNT_ON_START,
  currentFilm: {},
  films
};

export const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  INCREMENT_SHOWED_FILM_COUNT: `INCREMENT_SHOWED_FILM_COUNT`,
  RESET_SHOWED_FILM_COUNT: `RESET_SHOWED_FILM_COUNT`,
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

  incrementShowedFilmCount: () => {
    return {
      type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
      payload: INCREMENT_FILM_COUNT
    };
  },

  resetShowedFilmCount: () => {
    return {
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: FILM_COUNT_ON_START
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
      return extend(state, {
        genre: action.payload
      });
    case ActionType.INCREMENT_SHOWED_FILM_COUNT:
      return extend(state, {
        showedFilms: state.showedFilms + action.payload
      });
    case ActionType.RESET_SHOWED_FILM_COUNT:
      return extend(state, {
        showedFilms: action.payload
      });
    case ActionType.CHANGE_CURRENT_FILM:
      return extend(state, {
        currentFilm: action.payload
      });
    case ActionType.FILTER_FILMS:
      return extend(state, {
        films: action.payload
      });
  }
  return state;
};

