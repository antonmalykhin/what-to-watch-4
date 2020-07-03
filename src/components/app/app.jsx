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
    const {films, currentFilm, onFilmCardClick} = this.props;
    const promoFilm = films[0];

    if (isEmptyObject(currentFilm)) {
      return (
        <Main
          promoFilm={promoFilm}
          films={films}
          onFilmClick={(film) => {
            onFilmCardClick(film);
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
    const {films, onFilmCardClick} = this.props;
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
  currentFilm: PropTypes.oneOfType([
    PropTypes.object.isRequired
  ]).isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  currentFilm: state.currentFilm
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(ActionCreator.changeCurrentFilm(film));
  },
  onGenreButtonClick() {
    dispatch(ActionCreator.getFilteredFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
