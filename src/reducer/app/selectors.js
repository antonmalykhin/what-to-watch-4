import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getShowedFilms = (state) => {
  return state[NAME_SPACE].showedFilms;
};

export const getCurrentYear = (state) => {
  return state[NAME_SPACE].currentYear;
};
