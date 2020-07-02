import films from './mock/films.js';

const InitialState = {
  genre: `All genres`,
  films
};

export const ActionType = {
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  FILTER_FILMS: `FILTER_FILMS`
};

export const ActionCreator = {
  changeGenreFilter: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genre
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
    case ActionType.FILTER_FILMS:
      return Object.assign({}, state, {films: action.payload});
  }
  return state;
};

