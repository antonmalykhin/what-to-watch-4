import * as React from 'react';
import {AuthorizationStatus} from '../../reducer/user/user';
import history from '../../history';
import {AppRoute} from '../../const';
import {Film} from '../../types';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  authorizationStatus: string;
  promoFilm: Film;
  addPromoToFavorites: (
    id: string | number,
    inFavorite: boolean
  ) => void;
  favoriteFilms: Film[];
}

const FilmCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    authorizationStatus,
    promoFilm,
    addPromoToFavorites,
    favoriteFilms
  } = props;

  const {
    id,
    title,
    genre,
    release,
    background,
    poster
  } = promoFilm;

  const inFavorite = !favoriteFilms.find((it) => it.id === id);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src={background}
          alt={title}
        />
      </div>

      {children}

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={poster}
              alt={title}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{release}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                history.push(`${AppRoute.FILMS}/${id}${AppRoute.PLAYER}`);
              }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <button className="btn btn--list movie-card__button" type="button"
                onClick={() => {
                  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
                    history.push(AppRoute.LOGIN);
                  }
                  addPromoToFavorites(id, inFavorite);
                }}
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref={`#${inFavorite ? `add` : `in-list` }`}></use>
                </svg>
                <span>My list</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmCard;
