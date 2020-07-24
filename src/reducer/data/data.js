import {extend} from '../../utils.js';
import {filmAdapter, filmsAdapter} from '../../adapters/film-adapter.js';
import {getFilterItems} from '../../utils.js';
import {FIRST_FILTER_ELEMENT_NAME} from '../../const';

const InitialState = {
  activeFilter: FIRST_FILTER_ELEMENT_NAME,
  filters: [],
  films: [],
  promoFilm: {}
};

export const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  LOAD_FILTERS: `LOAD_FILTERS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
};

export const ActionCreator = {
  changeGenreFilter: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre
    };
  },

  loadFilters: (filters) => {
    return {
      type: ActionType.LOAD_FILTERS,
      payload: filters
    };
  },

  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },

  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film
    };
  }
};

export const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = filmsAdapter(response.data);
        const filters = getFilterItems(films);
        filters.unshift(FIRST_FILTER_ELEMENT_NAME);
        dispatch(ActionCreator.loadFilms(films));
        dispatch(ActionCreator.loadFilters(filters));
      })
      .catch((error) => {
        throw error;
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = filmAdapter(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      })
      .catch((error) => {
        throw error;
      });
  },

  postComment: (filmID, postData) => (dispatch, getState, api) => {
    return api.post(`/comments/${filmID}`, {
      rating: postData.rating,
      comment: postData.comment
    });
  }
};


export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {
        activeFilter: action.payload
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.LOAD_FILTERS:
      return extend(state, {
        filters: action.payload
      });
  }
  return state;
};
