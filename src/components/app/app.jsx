import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isEmptyObject} from '../../utils.js';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import MainVideoPlayer from '../main-video-player/main-video-player.jsx';
import withActiveMainPlayer from '../../hocks/with-active-main-player/with-active-main-player.js';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app.js';
import {getCurrentFilm, getPlayingFilm, getCurrentYear} from '../../reducer/app/selectors.js';
import {getFilteredFilms, getPromoFilm} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user.js';

const MainVideoPlayerWrapped = withActiveMainPlayer(MainVideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {
      films,
      promoFilm,
      currentFilm,
      playingFilm,
      currentYear,
      authorizationStatus,
      onFilmCardClick,
      onPlayButtonClick,
      onExitButtonClick,
      login
    } = this.props;
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      if (isEmptyObject(currentFilm) && isEmptyObject(playingFilm)) {
        return (
          <Main
            authorizationStatus={authorizationStatus}
            currentYear={currentYear}
            promoFilm={promoFilm}
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

      if (!isEmptyObject(currentFilm) && isEmptyObject(playingFilm)) {
        return (
          <FilmPage
            authorizationStatus={authorizationStatus}
            currentYear={currentYear}
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
          <MainVideoPlayerWrapped
            film={playingFilm}
            onExitClick={() => {
              onExitButtonClick();
            }}
          />
        );
      }
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn onSubmit={login} />
      );
    }

    return null;
  }

  render() {
    const {login} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-sign-in">
            <SignIn onSubmit={login}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  currentFilm: PropTypes.object.isRequired,
  playingFilm: PropTypes.object.isRequired,
  currentYear: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  promoFilm: getPromoFilm(state),
  currentFilm: getCurrentFilm(state),
  playingFilm: getPlayingFilm(state),
  currentYear: getCurrentYear(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(AppActionCreator.changeCurrentFilm(film));
  },
  resetShowedFilms() {
    dispatch(AppActionCreator.resetShowedFilmCount());
  },
  onPlayButtonClick(film) {
    dispatch(AppActionCreator.openMainPlayer(film));
  },
  onExitButtonClick() {
    dispatch(AppActionCreator.closeMainPlayer());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
