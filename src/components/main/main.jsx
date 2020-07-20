import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import FilmList from '../film-list/film-list.jsx';
import Filter from '../filter/filter.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import withActiveItem from '../../hocks/with-active-item/with-active-item.js';
import FilmCard from '../film-card/film-card.jsx';
import Header from '../header/header.jsx';
import LoadingMessage from '../loading-message/loading-message.jsx';

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
      films,
      showedFilmCount,
      onShowMoreButtonClick,
      promoFilm,
      currentFilter,
      onFilmClick,
      onFilterClick,
      onPlayClick
    } = this.props;


    const filterItems = this._getFilterItems(films);
    const filteredFilms = this._getFilterFilms(films, currentFilter);
    let showedFilms = filteredFilms.slice(0, showedFilmCount);

    return (
      <React.Fragment>

        <FilmCard
          promoFilm={promoFilm}
          onPlayClick={onPlayClick}
        >
          <Header />
        </FilmCard>


        <div className="page-content">

          {films.length ? <section className="catalog">
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

            {(showedFilms.length === films.length || showedFilms.length < SHOWED_FILM_COUNT) ? null : <ShowMoreButton
              onButtonClick={() => {
                onShowMoreButtonClick();
              }}
            />}
          </section> : <LoadingMessage />}

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
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
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
