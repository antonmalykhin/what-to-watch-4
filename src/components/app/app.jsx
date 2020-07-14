import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isEmptyObject} from '../../utils.js';
import {ActionCreator} from '../../reducer.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {
      films,
      currentFilm,
      currentFilter,
      onFilmCardClick,
      onFilterItemClick,
      resetShowedFilms
    } = this.props;

    const promoFilm = films[0];

    if (isEmptyObject(currentFilm)) {
      return (
        <Main
          promoFilm={promoFilm}
          currentFilter={currentFilter}
          films={films}
          onFilmClick={(film) => {
            onFilmCardClick(film);
          }}
          onFilterClick={(filterItem) => {
            onFilterItemClick(filterItem);
            resetShowedFilms();
          }}
        />
      );
    }

    if (!isEmptyObject(currentFilm)) {
      return (
        <FilmPage
          film={currentFilm}
          films={films}
          onFilmClick={(film) => {
            onFilmCardClick(film);
          }}/>
      );
    }

    return null;
  }

  render() {
    const {
      films,
      onFilmCardClick
    } = this.props;

    const currentFilm = films[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <FilmPage
              film={currentFilm}
              films={films}
              onFilmClick={(film) => {
                onFilmCardClick(film);
              }}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })),
  currentFilm: PropTypes.object.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
  resetShowedFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  currentFilm: state.currentFilm,
  currentFilter: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(ActionCreator.changeCurrentFilm(film));
  },
  onFilterItemClick(filterItem) {
    dispatch(ActionCreator.changeGenreFilter(filterItem));
  },
  resetShowedFilms() {
    dispatch(ActionCreator.resetShowedFilmCount());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
