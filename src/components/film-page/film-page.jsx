import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import FilmDescription from '../film-description/film-description.jsx';
import withActiveItem from '../../hocks/with-active-item/with-active-item.js';

const MORE_LIKE_THIS_FILM_COUNT = 4;

const TABS = [
  `Overview`,
  `Details`,
  `Reviews`
];

const FilmDescriptionWrapped = withActiveItem(FilmDescription);
const FilmListWrapped = withActiveItem(FilmList);

const FilmPage = (props) => {

  const {
    film,
    films,
    onFilmClick
  } = props;

  const {
    background,
    title,
    genre,
    release,
    poster
  } = film;

  const moreLikeThisFilms = films.slice(0, MORE_LIKE_THIS_FILM_COUNT);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
              film={film}
            />}

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {<FilmListWrapped
            films={moreLikeThisFilms}
            onFilmClick={onFilmClick}
          />}

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmPage.propTypes = {
  film: PropTypes.shape({
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired,
    description: PropTypes.string.isRequired,
    crew: PropTypes.shape({
      director: PropTypes.string.isRequired,
      starring: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default FilmPage;
