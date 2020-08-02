import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FilmList from '../film-list/film-list';
import Filter from '../filter/filter';
import ShowMoreButton from '../show-more-button/show-more-button';
import withActiveItem from '../../hocks/with-active-item/with-active-item';
import FilmCard from '../film-card/film-card';
import Header from '../header/header';
import Footer from '../footer/footer';
import LoadingMessage from '../loading-message/loading-message';
import {ActionCreator as AppActionCreator} from '../../reducer/app/app';
import {ActionCreator as DataActionCreator} from '../../reducer/data/data';
import {getShowedFilms} from '../../reducer/app/selectors';
import {getFilterItems, getActiveFilter} from '../../reducer/data/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';
import {AppRoute} from '../../const';


const SHOWED_FILM_COUNT = 8;

const FilmListWrapped = withActiveItem(FilmList, `films`);


class Main extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      authorizationStatus,
      currentYear,
      films,
      favoriteFilms,
      promoFilm,
      filterItems,
      activeFilterItem,
      showedFilmCount,
      onShowMoreButtonClick,
      onFilterButtonClick,
      resetShowedFilms,
      addPromoToFavorites,
      loadComments
    } = this.props;


    let showedFilms = films.slice(0, showedFilmCount);

    return (
      <React.Fragment>

        <FilmCard
          favoriteFilms={favoriteFilms}
          promoFilm={promoFilm}
          addPromoToFavorites={addPromoToFavorites}
        >
          <Header classNameModifier={`movie-card`}>
            <div className="user-block">

              {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={AppRoute.MY_LIST}><div className="user-block__avatar"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}

            </div>
          </Header>
        </FilmCard>


        <div className="page-content">

          {films.length ? <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {<Filter
              filterItems={filterItems}
              currentFilter={activeFilterItem}
              onFilterClick={onFilterButtonClick}
              resetShowedFilms={resetShowedFilms}
            />}

            {<FilmListWrapped
              films={showedFilms}
              loadComments={loadComments}
            />}

            {(showedFilms.length === films.length || showedFilms.length < SHOWED_FILM_COUNT) ? null : <ShowMoreButton
              onButtonClick={() => {
                onShowMoreButtonClick();
              }}
            />}
          </section> : <LoadingMessage />}

          <Footer year={currentYear} />
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  showedFilmCount: PropTypes.number.isRequired,
  activeFilterItem: PropTypes.string.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  currentYear: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  filterItems: PropTypes.array.isRequired,
  onFilterButtonClick: PropTypes.func.isRequired,
  resetShowedFilms: PropTypes.func.isRequired,
  addPromoToFavorites: PropTypes.func.isRequired,
  favoriteFilms: PropTypes.array.isRequired,
  loadComments: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    showedFilmCount: getShowedFilms(state),
    filterItems: getFilterItems(state),
    activeFilterItem: getActiveFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMoreButtonClick() {
      dispatch(AppActionCreator.incrementShowedFilmCount());
    },

    resetShowedFilms() {
      dispatch(AppActionCreator.resetShowedFilmCount());
    },

    onFilterButtonClick(genre) {
      dispatch(DataActionCreator.changeGenreFilter(genre));
    }
  };
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);