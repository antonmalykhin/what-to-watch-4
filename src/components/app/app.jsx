import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isEmptyObject} from '../../utils.js';
import {ActionCreator} from '../../reducer.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import MainVideoPlayer from '../main-video-player/main-video-player.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {
      films,
      currentFilm,
      currentFilter,
      playingFilm,
      onFilmCardClick,
      onFilterItemClick,
      resetShowedFilms,
      onPlayButtonClick,
      onExitButtonClick
    } = this.props;

    const promoFilm = films[0];

    if (isEmptyObject(currentFilm) && isEmptyObject(playingFilm)) {
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
          onPlayClick={(film) => {
            onPlayButtonClick(film);
          }}
        />
      );
    }

    if (!isEmptyObject(currentFilm) && isEmptyObject(playingFilm)) {
      return (
        <FilmPage
          film={currentFilm}
          films={films}
          onFilmClick={(film) => {
            onFilmCardClick(film);
          }}
          onPlayClick={(film) => {
            onPlayButtonClick(film);
          }}
        />
      );
    }

    if (!isEmptyObject(playingFilm)) {
      return (
        <MainVideoPlayer
          film={playingFilm}
          onExitClick={() => {
            onExitButtonClick();
          }}
        />
      );
    }

    return null;
  }

  render() {
    const {
      films,
      onFilmCardClick,
      onPlayButtonClick,
      onExitButtonClick
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
              }}
              onPlayClick={(film) => {
                onPlayButtonClick(film);
              }}
            />
          </Route>
          <Route exact path="/dev-player">
            <MainVideoPlayer
              film={currentFilm}
              onExitClick={() => {
                onExitButtonClick();
              }}
            />
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
  playingFilm: PropTypes.object.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilterItemClick: PropTypes.func.isRequired,
  resetShowedFilms: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  currentFilm: state.currentFilm,
  currentFilter: state.genre,
  playingFilm: state.playingFilm,
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
  },
  onPlayButtonClick(film) {
    dispatch(ActionCreator.openMainPlayer(film));
  },
  onExitButtonClick() {
    dispatch(ActionCreator.closeMainPlayer());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
