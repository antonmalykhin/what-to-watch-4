import * as React from 'react';
import {Link} from 'react-router-dom';
import FilmList from '../film-list/film-list';
import FilmDescription from '../film-description/film-description';
import Header from '../header/header';
import Footer from '../footer/footer';
import {AuthorizationStatus} from '../../reducer/user/user';
import withActiveItem from '../../hocks/with-active-item/with-active-item';
import {getLikeThisFilms, getCurrentFilm} from '../../utils';
import {AppRoute} from '../../const';
import history from '../../history';
import {Film, Comment, Match} from '../../types';

const MORE_LIKE_THIS_FILM_COUNT = 4;

const TABS = [
  `Overview`,
  `Details`,
  `Reviews`
];

const FilmDescriptionWrapped = withActiveItem(FilmDescription, `tabs`);
const FilmListWrapped = withActiveItem(FilmList, `films`);

interface Props {
  authorizationStatus: string,
  currentYear: number,
  films: Film[],
  favoriteFilms: Film[],
  addFilmToFavorites: (id: string | number, inFavorite: boolean) => void,
  comments: Comment[],
  loadComments: (id: string | number) => void,
  match: Match,
};

const FilmPage: React.FunctionComponent<Props> = (props: Props) => {
  const {
    authorizationStatus,
    currentYear,
    films,
    favoriteFilms,
    addFilmToFavorites,
    comments,
    loadComments,
    match
  } = props;

  const currentFilm = getCurrentFilm(films, match.params.id);

  const {
    id,
    backgroundColor,
    background,
    title,
    genre,
    release,
    poster,
  } = currentFilm;


  const inFavorite = !favoriteFilms.find((it) => it.id === id);

  const moreLikeThisFilms = getLikeThisFilms(films, currentFilm, MORE_LIKE_THIS_FILM_COUNT);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full"
        style={
          {
            backgroundColor
          }
        }
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          {<Header classNameModifier={`movie-card`}>
            <div className="user-block">

              {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={AppRoute.MY_LIST}><div className="user-block__avatar"><img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" /></div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}

            </div>
          </Header>}

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={() => {
                    history.push(`${AppRoute.FILMS}/${id}${AppRoute.PLAYER}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button className="btn btn--list movie-card__button" type="button"
                  onClick={() => addFilmToFavorites(id, inFavorite)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={`#${inFavorite ? `add` : `in-list`}`}></use>
                  </svg>
                  <span>My list</span>
                </button>

                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`${AppRoute.FILMS}/${id}${AppRoute.REVIEW}`} className="btn movie-card__button">Add review</Link> : ``}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            {<FilmDescriptionWrapped
              tabs={TABS}
              film={currentFilm}
              comments={comments}
              loadComments={loadComments}
            />}

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {<FilmListWrapped
            films={moreLikeThisFilms}
            loadComments={loadComments}
          />}

        </section>

        <Footer year={currentYear} />
      </div>
    </React.Fragment>
  );
};

export default FilmPage;
