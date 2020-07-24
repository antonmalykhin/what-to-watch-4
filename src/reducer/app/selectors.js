import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getShowedFilms = (state) => {
  return state[NAME_SPACE].showedFilms;
};

export const getCurrentFilm = (state) => {
  return state[NAME_SPACE].currentFilm;
};

export const getPlayingFilm = (state) => {
  return state[NAME_SPACE].playingFilm;
};

export const getCurrentYear = (state) => {
  return state[NAME_SPACE].currentYear;
};
