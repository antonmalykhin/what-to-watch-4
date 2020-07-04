import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import FilmList from '../film-list/film-list.jsx';
import Filter from '../filter/filter.jsx';

const FIRST_FILTER_ELEMENT_NAME = `All genres`;

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this._getFilterItems = this._getFilterItems.bind(this);
    this._filterFilms = this._filterFilms.bind(this);

  }

  _filterFilms(films, genre) {
    if (genre === FIRST_FILTER_ELEMENT_NAME) {
      return films;
    }
    return films.slice().filter((film) => {
      return film.genre === genre;
    });
  }

  _getFilterItems(films) {
    const genres = films.map((film) => {
      return film.genre;
    });

    const uniqueGenres = [...new Set(genres)];

    uniqueGenres.unshift(FIRST_FILTER_ELEMENT_NAME);
    return uniqueGenres;
  }

  render() {
    const {activeFilter, onFilterButtonClick, promoFilm, films, onFilmClick} = this.props;
    const {title, genre, release} = promoFilm;

    const filterItems = this._getFilterItems(films);
    const filteredFilms = this._filterFilms(films, activeFilter);

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
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
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

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
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {<Filter
              filterItems={filterItems}
              state={activeFilter}
              onFilterItemClick={(selectedFilter) => {
                onFilterButtonClick(selectedFilter);
              }}
            />}

            {<FilmList
              films={filteredFilms}
              onFilmClick={onFilmClick}
            />}

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>

          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
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
  }
}

Main.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onFilterButtonClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    runtime: PropTypes.string.isRequired,
    poster: PropTypes.string,
    rating: PropTypes.shape({
      score: PropTypes.number,
      level: PropTypes.string,
      count: PropTypes.number
    })
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    activeFilter: state.genre
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterButtonClick(genre) {
      dispatch(ActionCreator.changeGenreFilter(genre));
    }
  };
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
