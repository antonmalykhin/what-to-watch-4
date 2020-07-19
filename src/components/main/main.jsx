import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import FilmList from '../film-list/film-list.jsx';
import Filter from '../filter/filter.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import withActiveItem from '../../hocks/with-active-item/with-active-item';

const FIRST_FILTER_ELEMENT_NAME = `All genres`;
const SHOWED_FILM_COUNT = 8;

const FilmListWrapped = withActiveItem(FilmList, `films`);


class Main extends PureComponent {
  constructor(props) {
    super(props);

    this._getFilterItems = this._getFilterItems.bind(this);
    this._getFilterFilms = this._getFilterFilms.bind(this);
  }

  _getFilterItems(films) {
    const genres = films.map((film) => {
      return film.genre;
    });

    const uniqueGenres = [...new Set(genres)];

    uniqueGenres.unshift(FIRST_FILTER_ELEMENT_NAME);
    return uniqueGenres;
  }

  _getFilterFilms(films, genre) {
    if (genre === FIRST_FILTER_ELEMENT_NAME) {
      return films;
    }
    return films.slice().filter((film) => {
      return film.genre === genre;
    });
  }

  render() {
    const {
      showedFilmCount,
      onShowMoreButtonClick,
      promoFilm,
      currentFilter,
      onFilmClick,
      onFilterClick,
      onPlayClick
    } = this.props;

    const {
      title,
      genre,
      release
    } = promoFilm;

    const _mockFilms = [...this.props.films, ...this.props.films, ...this.props.films];
    const filterItems = this._getFilterItems(_mockFilms);
    const filteredFilms = this._getFilterFilms(_mockFilms, currentFilter);
    let showedFilms = filteredFilms.slice(0, showedFilmCount);

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
                  <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(promoFilm)}>
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
              currentFilter={currentFilter}
              onFilterClick={onFilterClick}
            />}

            {<FilmListWrapped
              films={showedFilms}
              onFilmClick={onFilmClick}
            />}

            {(showedFilms.length === _mockFilms.length || showedFilms.length < SHOWED_FILM_COUNT) ? null : <ShowMoreButton
              onButtonClick={() => {
                onShowMoreButtonClick();
              }}
            />}

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
  showedFilmCount: PropTypes.number.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
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
  onFilmClick: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    showedFilmCount: state.showedFilms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMoreButtonClick() {
      dispatch(ActionCreator.incrementShowedFilmCount());
    }
  };
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
