import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../add-review/add-review.jsx';
import MainVideoPlayer from '../main-video-player/main-video-player.jsx';
import withActiveMainPlayer from '../../hocks/with-active-main-player/with-active-main-player.js';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app.js';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data.js';
import {getCurrentFilm, getPlayingFilm, getCurrentYear} from '../../reducer/app/selectors.js';
import {getFilteredFilms, getPromoFilm, getIsCommentSend} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {Operation as AppOperation} from '../../reducer/app/app.js';
import history from '../../history';
import withSetRating from '../../hocks/with-set-rating/with-set-rating.js';
import {AppRoute} from '../../const.js';

const MainVideoPlayerWrapped = withActiveMainPlayer(MainVideoPlayer);
const AddReviewWrapped = withSetRating(AddReview);

class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
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
      addPromoToFavorites,
      addFilmToFavorites,
      login,
      postReview,
      isCommentSend,
      resetWarning
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
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
              addPromoToFavorites={addPromoToFavorites}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn onSubmit={login}/>
          </Route>
          <Route exact path={`${AppRoute.FILMS}/:id`}
            render={() => {
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
                  addFilmToFavorites={addFilmToFavorites}
                />
              );
            }}
          />
          <Route exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
            render={() => {
              return (
                <AddReviewWrapped
                  film={currentFilm}
                  onSubmit={postReview}
                  isCommentSend={isCommentSend}
                  resetWarning={resetWarning}
                />
              );
            }}
          />
          <Route exact path={`${AppRoute.FILMS}/:id${AppRoute.PLAYER}`}
            render={() => {
              return (
                <MainVideoPlayerWrapped
                  film={playingFilm}
                  onExitClick={() => {
                    history.goBack();
                    onExitButtonClick();
                  }}
                />
              );
            }}
          />
        </Switch>
      </Router>
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
  login: PropTypes.func.isRequired,
  postReview: PropTypes.func.isRequired,
  isCommentSend: PropTypes.bool.isRequired,
  resetWarning: PropTypes.func.isRequired,
  addFilmToFavorites: PropTypes.func.isRequired,
  addPromoToFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  promoFilm: getPromoFilm(state),
  currentFilm: getCurrentFilm(state),
  playingFilm: getPlayingFilm(state),
  currentYear: getCurrentYear(state),
  authorizationStatus: getAuthorizationStatus(state),
  isCommentSend: getIsCommentSend(state)
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
  },
  postReview(filmID, disableForm, postData) {
    dispatch(DataOperation.postComment(filmID, disableForm, postData));
  },
  resetWarning() {
    dispatch(DataActionCreator.sendComment(true));
  },
  addFilmToFavorites(filmID, data) {
    dispatch(AppOperation.addToFavorites(filmID, data));
  },
  addPromoToFavorites(filmID, data) {
    dispatch(DataOperation.addPromoToFavorites(filmID, data));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
