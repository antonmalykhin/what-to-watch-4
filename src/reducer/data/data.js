import {extend} from '../../utils.js';
import {filmAdapter, filmsAdapter} from '../../adapters/film-adapter.js';
import {getFilterItems} from '../../utils.js';
import {FIRST_FILTER_ELEMENT_NAME} from '../../const';

const InitialState = {
  activeFilter: FIRST_FILTER_ELEMENT_NAME,
  filters: [],
  films: [],
  favoriteFilms: [],
  promoFilm: {},
  comments: [],
  isCommentSend: true
};

export const ActionType = {
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  REMOVE_TO_FAVORITES: `REMOVE_TO_FAVORITES`,
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  LOAD_FILTERS: `LOAD_FILTERS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  IS_COMMENT_SEND: `IS_COMMENT_SEND`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`
};

export const ActionCreator = {
  addToFavorites: (film) => {
    return {
      type: ActionType.ADD_TO_FAVORITES,
      payload: film
    };
  },

  removeFromFavorites: (film) => {
    return {
      type: ActionType.REMOVE_TO_FAVORITES,
      payload: film
    };
  },

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
  },

  sendComment: (value) => {
    return {
      type: ActionType.IS_COMMENT_SEND,
      payload: value
    };
  },

  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  },

  loadFavoriteFilms: (favoriteFilms) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: favoriteFilms
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

  addToFavorites: (filmID, data) => (dispatch, getState, api) => {
    const adaptedData = +data;
    return api.post(`/favorite/${filmID}/${adaptedData}`)
      .then((response) => {
        const favoriteFilm = filmAdapter(response.data);
        if (favoriteFilm.isFavorite) {
          dispatch(ActionCreator.addToFavorites(favoriteFilm));
        } else {
          dispatch(ActionCreator.removeFromFavorites(favoriteFilm));
        }
      })
      .catch((error) => {
        throw error;
      });
  },

  loadComments: (filmID) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmID}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      })
      .catch((error) => {
        throw error;
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteFilms = filmsAdapter(response.data);
        dispatch(ActionCreator.loadFavoriteFilms(favoriteFilms));
      })
      .catch((error) => {
        throw error;
      });
  },

  postComment: (filmID, postData, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/comments/${filmID}`, {
      rating: postData.rating,
      comment: postData.comment
    })
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      dispatch(ActionCreator.sendComment(false));
      onError();
      throw error;
    });
  }
};


export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        favoriteFilms: [...state.favoriteFilms, action.payload]
      });

    case ActionType.REMOVE_TO_FAVORITES:
      return extend(state, {
        favoriteFilms: [...state.favoriteFilms].filter((it) => it.id !== action.payload.id)
      });

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

    case ActionType.IS_COMMENT_SEND:
      return extend(state, {
        isCommentSend: action.payload
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });
  }
  return state;
};
