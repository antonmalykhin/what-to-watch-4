import {createSelector} from "reselect";
import NameSpace from '../name-space.js';
import {FIRST_FILTER_ELEMENT_NAME} from '../../const';

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getActiveFilter = (state) => {
  return state[NAME_SPACE].activeFilter;
};

export const getFilterItems = (state) => {
  return state[NAME_SPACE].filters;
};

export const getIsCommentSend = (state) => {
  return state[NAME_SPACE].isCommentSend;
};

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getActiveFilter,
    (films, activeFilter) => {
      if (activeFilter !== FIRST_FILTER_ELEMENT_NAME) {
        return films.filter((film) => film.genre === activeFilter);
      }
      return films;
    }
);
