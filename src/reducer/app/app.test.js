import {reducer, ActionCreator, ActionType} from './app.js';

describe(`Reducer changes the state correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentYear: 0,
      showedFilms: 8,
      isLoading: true
    });
  });

  it(`Reducer changes showedFilms by given value`, () => {
    expect(reducer({
      currentYear: 0,
      showedFilms: 8,
      isLoading: true
    }, {
      type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
      payload: 8
    })).toEqual({
      currentYear: 0,
      showedFilms: 16,
      isLoading: true
    });
  });

  it(`Reducer reset showedFilms`, () => {
    expect(reducer({
      currentYear: 0,
      showedFilms: 24,
      isLoading: true
    }, {
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: 8
    })).toEqual({
      currentYear: 0,
      showedFilms: 8,
      isLoading: true
    });
  });

  it(`Reducer changes currentYear by given value`, () => {
    expect(reducer({
      currentYear: 0,
      showedFilms: 8,
      isLoading: true
    }, {
      type: ActionType.GET_CURRENT_YEAR,
      payload: 2020
    })).toEqual({
      currentYear: 2020,
      showedFilms: 8,
      isLoading: true
    });
  });

  it(`Reducer changes isLoading by given value`, () => {
    expect(reducer({
      currentYear: 0,
      showedFilms: 8,
      isLoading: true
    }, {
      type: ActionType.CHANGE_LOADING_STATUS,
      payload: false
    })).toEqual({
      currentYear: 0,
      showedFilms: 8,
      isLoading: false
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for increment showed films count returns correct action`, () => {
    expect(ActionCreator.incrementShowedFilmCount()).toEqual({
      type: ActionType.INCREMENT_SHOWED_FILM_COUNT,
      payload: 8
    });
  });

  it(`Action creator for reset showed films count returns correct action`, () => {
    expect(ActionCreator.resetShowedFilmCount()).toEqual({
      type: ActionType.RESET_SHOWED_FILM_COUNT,
      payload: 8
    });
  });

  it(`Action creator for set current year returns correct action`, () => {
    expect(ActionCreator.getCurrentYear(2020)).toEqual({
      type: ActionType.GET_CURRENT_YEAR,
      payload: 2020
    });
  });

  it(`Action creator for change loading status returns correct action`, () => {
    expect(ActionCreator.changeLoadingStatus(true)).toEqual({
      type: ActionType.CHANGE_LOADING_STATUS,
      payload: true
    });
  });
});
