import {extend} from '../../utils.js';
import {filmAdapter} from '../../adapters/film-adapter.js';

const FILM_COUNT_ON_START = 8;
const INCREMENT_FILM_COUNT = 8;

const InitialState = {
  currentYear: 0,
  showedFilms: FILM_COUNT_ON_START,
  currentFilm: {},
  playingFilm: {},
};

export const ActionType = {
  INCREMENT_SHOWED_FILM_COUNT: `INCREMENT_SHOWED_FILM_COUNT`,
  RESET_SHOWED_FILM_COUNT: `RESET_SHOWED_FILM_COUNT`,
  CHANGE_CURRENT_FILM: `CHANGE_CURRENT_FILM`,
  FILTER_FILMS: `FILTER_FILMS`,
  OPEN_MAIN_PLAYER: `OPEN_MAIN_PLAYER`,
  CLOSE_MAIN_PLAYER: `CLOSE_MAIN_PLAYER`,
  GET_CURRENT_YEAR: `GET_CURRENT_YEAR`
};

export const ActionCreator = {
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
  },

  openMainPlayer: (film) => {
    return {
      type: ActionType.OPEN_MAIN_PLAYER,
      payload: film
    };
  },

  closeMainPlayer: () => {
    return {
      type: ActionType.CLOSE_MAIN_PLAYER,
      payload: {}
    };
  },

  getCurrentYear: (year) => {
    return {
      type: ActionType.GET_CURRENT_YEAR,
      payload: year
    };
  }
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
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
    case ActionType.OPEN_MAIN_PLAYER:
      return extend(state, {
        playingFilm: action.payload
      });
    case ActionType.CLOSE_MAIN_PLAYER:
      return extend(state, {
        playingFilm: action.payload
      });
    case ActionType.GET_CURRENT_YEAR:
      return extend(state, {
        currentYear: action.payload
      });
  }
  return state;
};

export const Operation = {
  addToFavorites: (filmID, data) => (dispatch, getState, api) => {
    const adaptedData = +data;
    return api.post(`/favorite/${filmID}/${adaptedData}`, {})
      .then((response) => {
        const film = filmAdapter(response.data);
        dispatch(ActionCreator.changeCurrentFilm(film));
      })
      .catch((error) => {
        throw error;
      });
  },

  getCurrentYear: () => (dispatch) => {
    const year = new Date().getFullYear();
    dispatch(ActionCreator.getCurrentYear(year));
  }
};
