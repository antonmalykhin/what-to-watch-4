import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {AppRoute} from '../../const.js';

const FilmCard = (props) => {
  const {
    children,
    promoFilm,
    onPlayClick,
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
                onPlayClick(promoFilm);
                history.push(`${AppRoute.FILMS}/${id}${AppRoute.PLAYER}`);
              }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <button className="btn btn--list movie-card__button" type="button"
                onClick={() => addPromoToFavorites(id, inFavorite)}
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref={`#${inFavorite ? `in-list` : `add`}`}></use>
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

FilmCard.propTypes = {
  children: PropTypes.node.isRequired,
  promoFilm: PropTypes.object.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  addPromoToFavorites: PropTypes.func.isRequired,
  favoriteFilms: PropTypes.array.isRequired
};

export default FilmCard;
