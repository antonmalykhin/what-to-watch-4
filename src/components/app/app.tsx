import * as React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../main/main';
import FilmPage from '../film-page/film-page';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import MainVideoPlayer from '../main-video-player/main-video-player';
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';
import {Operation as DataOperation} from '../../reducer/data/data';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user';
import {getFilteredFilms, getPromoFilm, getFavoriteFilms, getComments, getIsCommentSend} from '../../reducer/data/selectors';
import {getCurrentYear, getLoadingStatus} from '../../reducer/app/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import withActiveMainPlayer from '../../hocks/with-active-main-player/with-active-main-player';
import withSetRating from '../../hocks/with-set-rating/with-set-rating';
import history from '../../history';
import {AppRoute} from '../../const';

const MainVideoPlayerWrapped = withActiveMainPlayer(MainVideoPlayer);
const AddReviewWrapped = withSetRating(AddReview);


class App extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      isLoading,
      films,
      favoriteFilms,
      promoFilm,
      currentYear,
      authorizationStatus,
      addFilmToFavorites,
      login,
      postReview,
      isCommentSend,
      comments,
      loadComments
    } = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => {
              return (
                isLoading ? <Loader /> :
                  <Main
                    authorizationStatus={authorizationStatus}
                    currentYear={currentYear}
                    promoFilm={promoFilm}
                    favoriteFilms={favoriteFilms}
                    films={films}
                    addPromoToFavorites={addFilmToFavorites}
                    loadComments={loadComments}
                  />
              );
            }}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={() => authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to={AppRoute.ROOT}/> : <SignIn login={login} />
            }
          />
          <Route
            exact
            path={`${AppRoute.FILMS}/:id`}
            render={(props) => {
              return (
                isLoading ? <Loader /> :
                  <FilmPage
                    {...props}
                    authorizationStatus={authorizationStatus}
                    currentYear={currentYear}
                    films={films}
                    favoriteFilms={favoriteFilms}
                    addFilmToFavorites={addFilmToFavorites}
                    comments={comments}
                    loadComments={loadComments}
                  />
              );
            }}
          />
          <PrivateRoute
            exact
            path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
            render={(props) => {
              return (
                <AddReviewWrapped
                  {...props}
                  films={films}
                  onSubmit={postReview}
                  isCommentSend={isCommentSend}

                />
              );
            }}
          />
          <Route
            exact
            path={`${AppRoute.FILMS}/:id${AppRoute.PLAYER}`}
            render={(props) => {
              return (
                isLoading ? <Loader /> :
                  <MainVideoPlayerWrapped
                    {...props}
                    films={films}
                  />
              );
            }}
          />
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render = {() => {
              return (
                <MyList
                  currentYear={currentYear}
                  favoriteFilms={favoriteFilms}
                  loadComments={loadComments}
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
  favoriteFilms: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  currentYear: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  postReview: PropTypes.func.isRequired,
  isCommentSend: PropTypes.bool.isRequired,
  addFilmToFavorites: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  favoriteFilms: getFavoriteFilms(state),
  promoFilm: getPromoFilm(state),
  currentYear: getCurrentYear(state),
  authorizationStatus: getAuthorizationStatus(state),
  isLoading: getLoadingStatus(state),
  comments: getComments(state),
  isCommentSend: getIsCommentSend(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetShowedFilms() {
    dispatch(AppActionCreator.resetShowedFilmCount());
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  postReview(filmID, postData, onSuccess, onError) {
    dispatch(DataOperation.postComment(filmID, postData, onSuccess, onError));
  },

  addFilmToFavorites(filmID, data) {
    dispatch(DataOperation.addToFavorites(filmID, data));
  },

  loadComments(filmID) {
    dispatch(DataOperation.loadComments(filmID));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
